


/* const getImagenPromesa = () => new Promise (resolve => resolve ('https://rqwetet.com'));
getImagenPromesa().then(console.log); */

const getImagen = async () => {

    try {

        const apiKey = 'qSVCW8oaEF8o1LyTcezK0rgyT5ECR2tR';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // Manejo del error
        console.log(error)
    }


}

getImagen();

