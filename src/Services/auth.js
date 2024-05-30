const url = "https://postman-echo.com/basic-auth";
const myHeaders = new Headers();
const formdata = new FormData();

// https://www.postman.com/postman/workspace/published-postman-templates/request/631643-42c867ca-e72b-3307-169b-26a478b00641?ctx=code&tab=overview
export const authLogin = async (username, password) => {
    try {
        myHeaders.append(
            "Authorization",
            // `Basic ${Buffer.from(`${username}${password}`).toString("base64")}`
            `Basic ${btoa(`${username}${password}`)}`
            // https://developer.mozilla.org/en-US/docs/Web/API/btoa
        );

        const options = {
            method: "GET",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        const response = await fetch(url, options);
        const result = await response.text();
        return JSON.parse(result);
        // return JSON.parse(result) ? true : false;
    } catch (error) {
        console.error(error);
        return false;
    }
};
