import React from 'react';
import './App.css';
import { Form, Icon, Input, Button, message } from 'antd';
import UploadImage from "./components/uploadImage/Upload";
import { SendPushNotification } from "./utils/sendPushNotification";

const { TextArea } = Input;

class App extends React.Component {

  state = {
    titulo: "",
    subtitulo: "",
    contenido: "",
    imagen: "",
    usersTokens: []
  }

  onChangeText(name, value) {
    this.setState({ [name]: value });
  }

  fetchCreateNews = async () => {

    const { titulo, subtitulo, contenido, imagen } = this.state;

    await fetch('http://35.236.27.209/movilPeru/api/controller/create_news.php', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo: titulo,
        subtitulo: subtitulo,
        contenido: contenido,
        imagen: imagen
      })
    }).then(response => { return response.json() })
      .then(data => {
        message.warning(data.message);
      }).then(() => {
        this.fetchGetTokens();
      });

  }

  fetchGetTokens = async () => {
    await fetch('http://35.236.27.209/movilPeru/api/controller/get_tokens.php', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => { return response.json() })
      .then(data => {
        this.setState({ usersTokens: data.tokens });
      }).then(() => { this.sendPushNotifications() })
  }

  sendPushNotifications = async () => {
    const { usersTokens, titulo, subtitulo } = this.state;
    SendPushNotification(usersTokens, titulo, subtitulo);
    this.setState({
      titulo: "",
      subtitulo: "",
      contenido: "",
      imagen: "",
    });
  }

  render() {
    const { titulo, subtitulo, contenido, imagen } = this.state;

    return (
      <div className="formP">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Titulo"
              value={titulo}
              onChange={(e) => { this.onChangeText("titulo", e.target.value) }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Subtitulo"
              value={subtitulo}
              onChange={(e) => { this.onChangeText("subtitulo", e.target.value) }}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              placeholder="Contenido"
              rows={5}
              value={contenido}
              onChange={(e) => { this.onChangeText("contenido", e.target.value) }}
            />
          </Form.Item>
          <Form.Item>
            <UploadImage
              type={"documents"}
              imagen={imagen}
              titulo={titulo}
              subtitulo={subtitulo}
              contenido={contenido}
              onChange={(imagen) => { this.setState({ imagen: imagen }); }}
            />
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => { this.fetchCreateNews() }}>
              Crear Noticia
          </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedLogin = Form.create()(App)
export default WrappedLogin;