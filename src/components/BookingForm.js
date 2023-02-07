import "../assets/style/bookingForm.css"
import { useFormik } from "formik"

function BookingForm() {

    const formik = useFormik({
        initialValues : {
            resDate: '',
            resTime: '',
            guests: '',
            occasion: ''
        },

        onSubmit: values => {
            console.log("form data", values);
        },

        validate: values => {
            const errors = {};
            
            if(!values.resDate){
                errors.resDate = "Required"
            }

            if(!values.resTime){
                errors.resTime = "Required"
            }

            if(!values.guests){
                errors.guests = "Required"
            }

            if(!values.occasion) {
                errors.occasion = "Required"
            }

            return errors;
        }
    })

    return(
        <div>
            <h1>Reserve a Table</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        name="resDate"
                        onChange={formik.handleChange}
                        value={formik.values.resDate}
                    />
                    {formik.touched.resDate && formik.errors.resDate ? (<div className='error'>{formik.errors.resDate}</div>) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        name="resTime"
                        onChange={formik.handleChange}
                        value={formik.values.resTime}
                    >
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    {formik.touched.resTime && formik.errors.resTime ? (<div className="error">{formik.errors.resTime}</div>) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        placeholder="1"
                        onChange={formik.handleChange}
                        value={formik.values.guests}
                    />
                    {formik.touched.guests && formik.errors.guests ? (<div className="error">{formik.errors.guests}</div>) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        value={formik.values.occasion}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? (<div className="error">{formik.errors.occasion}</div>) : null}
                </div>

                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;