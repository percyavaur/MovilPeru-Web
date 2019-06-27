export const SendPushNotification = (somePushTokens, title, body) => {
    console.log(somePushTokens)
    somePushTokens.map((data) => {
        return data.expoToken ? fetch('https://exp.host/--/api/v2/push/send', {
            body: JSON.stringify({
                to: data.expoToken,
                title: title,
                body: body,
                sound: "default",
                data: { message: `${title} - ${body}` }
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            mode: "no-cors",
            sound: true
        }) : null;
    });
};