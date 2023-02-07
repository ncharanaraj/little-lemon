import "../assets/style/bookingForm.css"
import { useFormik } from "formik"

function BookingForm() {

    const formik = useFormik({
        initialValues : {
            resDate: '',
            resTime: '',
            guests: '',
            occasion: ''
        }
    })

    return(
        <div>
            <h1>Reserve a Table</h1>
            <form>
                <div className="form-control">
                    <label for="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        name="resDate"
                        onChange={formik.handleChange}
                        value={formik.values.resDate}
                    />
                </div>

                <div className="form-control">
                    <label for="res-time">Choose time</label>
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
                </div>

                <div className="form-control">
                    <label for="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        onChange={formik.handleChange}
                        value={formik.values.guests}
                    />
                </div>

                <div className="form-control">
                    <label for="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        value={formik.values.occasion}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;