import React, { Component } from "react";
import { Avatar, Divider, message, Spin, Upload } from "antd";
import { storage } from "../../firebase/config";
import { isEmpty } from "lodash";
import resizeImage from "resize-image";

export default class UploadImage extends Component {
    state = {
        imagen: this.props.imagen,
        loading: false,
    };

    beforeUploadImage = () => {
        if (!this.props.titulo || !this.props.subtitulo || !this.props.contenido) {
            message.warning("Porfavor completa los campos");
        }
    };

    uploadImageProfile = (documentFile) => {
        this.setState({ loading: true });
        console.log(this.validateExtension(documentFile));
        if (this.validateExtension(documentFile)) {
            this.convertImageToBase64(documentFile);
        } else {
            message.error("You can only upload images");
            this.setState({ loading: false });
        }
    };

    validateExtension = (document) => {
        return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(document.name);
    };

    convertImageToBase64 = (documentFile) => {
        const reader = new FileReader();

        reader.onload = (upload) => {
            let dataUrl = upload.target.result;
            let image = new Image();
            image.src = dataUrl;
            image.onload = () => {
                const ImgBase64 = resizeImage.resize(image, 720, 720, resizeImage.JPEG);
                this.uploadToStorageAndGetURL(documentFile, ImgBase64);
            };
        };
        reader.readAsDataURL(documentFile);
    };

    uploadToStorageAndGetURL = (documentFile, ImgBase64) => {
        const folder = this.props.titulo;
        const name = "imagen";
        const path = `${"news/" + folder}`;
        const uploadTask = ImgBase64 ?
            storage.ref(`${path + "/" + name}`).putString(ImgBase64, 'data_url')
            : storage.ref(`${path + "/" + name}`).put(documentFile);

        !isEmpty(uploadTask) ? uploadTask.on('state_changed',
            () => {
                storage.ref(`${path}`).child(name).getDownloadURL().then(
                    url => {
                        this.props.onChange(url);
                        console.log(url);
                    }).then(
                        () => {
                            this.setState({ loading: false });
                        });
            }) : console.log("error");
    };

    render() {
        const { imagen } = this.props;

        return (
            <div style={{ textAlign: "center" }}>
                <Spin
                    spinning={this.state.loading}
                    size="large"
                    tip="Loading...">
                    <Upload
                        action={this.uploadImageProfile}
                        showUploadList={false}
                        listType="picture-card"
                        className="avatar-uploader"
                        disabled={!this.props.titulo || !this.props.subtitulo || !this.props.contenido}
                    >
                        <Avatar
                            onClick={() => this.beforeUploadImage()}
                            size={100}
                            icon="user"
                            src={imagen} />
                    </Upload>
                </Spin>
                <Divider />
            </div>
        );
    }
}