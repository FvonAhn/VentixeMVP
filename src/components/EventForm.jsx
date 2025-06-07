function EventForm () {
    
    return (
        <div className="modal-form-background">
        <div className="form-container">
            <div className="form-header">
                <h1>Create Anything</h1>
            </div>
            <form className="form-box">
                <div className="form-group">
                    <label for="placeholder">Placeholder</label>
                    <input className="form-input" type="placeholder" id="placeholder" name="placeholder"/>
                </div>   
                <div className="form-group">
                    <label for="placeholder">Placeholder</label>
                    <input className="form-input" type="placeholder" id="placeholder" name="placeholder"/>
                </div>   
                <div className="form-group">
                    <label for="placeholder">Placeholder</label>
                    <input className="form-input" type="placeholder" id="placeholder" name="placeholder"/>
                </div>     
                <div className="form-group">
                    <label for="placeholder">Placeholder</label>
                    <input className="form-input" type="placeholder" id="placeholder" name="placeholder"/>
                </div>    
                <div className="form-group">
                    <label for="placeholder">Placeholder</label>
                    <input className="form-input" type="placeholder" id="placeholder" name="placeholder"/>
                </div>   
                <button className="btn-box form" type="submit">
                    <div className="btn-standard large">
                        Create
                    </div>
                </button>
            </form>
        </div>
    </div>
    )
}

export default EventForm