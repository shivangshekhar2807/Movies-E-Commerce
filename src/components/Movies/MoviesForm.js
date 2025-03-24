import { useState } from 'react';
import './MoviesForm.css';


function MoviesForm({setAddMovies}) {

    


    async function AddMoviesHandler(event) {
        event.preventDefault();
        const title = event.target.elements["text"].value;
        const price = event.target.elements["number"].value;
        
        const MovieObj = {
            title: title,
            price:price,
        }
      const response= await fetch("https://movies-e-commerce-default-rtdb.firebaseio.com/movies.json", {
            method: 'POST',
            body: JSON.stringify(MovieObj),
            headers: {
                'Content-Type' : 'application/json'
            }
      })
        const data = await response.json();
        setAddMovies(data);
        
   }


    return (
        <div className="form-container">
            <div className="form-box">
                <h2 className="form-title">Form</h2>
                <form onSubmit={AddMoviesHandler}>
                    <div className="form-group">
                        <label htmlFor="text" className="form-label">Title</label>
                        <input
                            type="text"
                            id="text"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number" className="form-label">Price</label>
                        <input
                            type="number"
                            id="number"
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="form-button" >
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    );
}
export default MoviesForm;