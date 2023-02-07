import BookingForm from "./BookingForm";

function BookingPage(){

    const booking = {
        maxWidth: "70vw",
        margin: "2rem auto",
        padding: "1rem"
    }

    return(
        <div style={booking}>
            <BookingForm />
        </div>
    );
}

export default BookingPage;