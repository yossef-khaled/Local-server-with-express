const postData = async (url = '', data = {}) => {
    console.log(data);
    const responce = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        } ,
        body: JSON.stringify(data),
    });

        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        } 
            catch(error) {
                console.log("error", error);
            }
        }

postData('/addMovie', {movie: 'the-matrix', score: 5});