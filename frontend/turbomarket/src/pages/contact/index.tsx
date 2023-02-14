import Navbar from "../components/navbar";

export default function ContactUs() {
    return (
        <section className=" h-screen text-center text-c.green">
            <Navbar />
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <form >
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows={5} /> 
                </div>
                <div>
                <button type="submit">Send Message</button> 
                </div>

            </form>



        </section>
    );
}   