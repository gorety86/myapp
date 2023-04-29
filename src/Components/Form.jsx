import React from "react"
import "./form.css"

const Form = () => {
    return (
        <>
        <section className="form-container">
            <div className="form-container-holder">
                  <form>
                    <div className="form-holder">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Date</label>
                            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter current date"/>
                          
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Amount</label>
                            <input type="number" class="form-control" id="exampleInputPassword1"/>
                          </div>
                      
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Description</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Category</label>
                            <input type="text" class="form-control" id="exampleInputPassword1"/>
                          </div>
                    </div>
                    <div className="form-button">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                   
                  </form>
            </div>
        </section>
        </>
    )
}
export default Form;