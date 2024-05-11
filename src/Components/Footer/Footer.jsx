


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">On-Site</a>
                    <a className="link link-hover">Remote</a>
                    <a className="link link-hover">Hybrid</a>
                    <a className="link link-hover">Part-Time</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Skill Development</a>
                    <a className="link link-hover">Job PLacement</a>
                    <a className="link link-hover">Help</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <img src="https://i.ibb.co/hZ9VcF6/logo.png" className="h-20 w-20" alt="" />
                    <p>JOB NEST <br />Copyright © 2008-2024, JobNest LLC</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-600"><path d="M20 2h-16c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-16c0-1.105-.895-2-2-2zm-4.625 16.219h-2.75v-8.656c0-1.848-2.25-1.7-2.25 0v8.656h-2.75v-11.344h2.75v1.593c.97-1.805 5.75-1.938 5.75 1.719v7.031z" /></svg></a>
                        <a href="https://github.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-800"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.486.5.094.682-.219.682-.484 0-.238-.009-.866-.013-1.7-2.782.604-3.368-1.346-3.368-1.346-.455-1.156-1.111-1.464-1.111-1.464-.908-.622.068-.609.068-.609 1.005.071 1.531 1.032 1.531 1.032.892 1.527 2.342 1.086 2.911.831.091-.645.35-1.086.636-1.336-2.22-.252-4.554-1.113-4.554-4.952 0-1.096.39-1.989 1.032-2.689-.104-.251-.448-1.271.097-2.647 0 0 .841-.268 2.75 1.024a9.535 9.535 0 0 1 2.478-.335c.841.006 1.694.113 2.478.335 1.908-1.292 2.748-1.024 2.748-1.024.546 1.376.201 2.396.097 2.647.643.7 1.03 1.593 1.03 2.689 0 3.849-2.338 4.697-4.566 4.943.358.31.676.922.676 1.858 0 1.342-.012 2.421-.012 2.749 0 .268.181.581.688.482C19.135 20.165 22 16.419 22 12c0-5.523-4.477-10-10-10z" /></svg></a>
                        <a href="https://www.glassdoor.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-green-500"><path d="M2 7c0-2.206 1.794-4 4-4h12c2.206 0 4 1.794 4 4v10c0 2.206-1.794 4-4 4h-3.882c-.878 2.201-3.465 4-6.618 4s-5.739-1.799-6.617-4h-3.883c-2.206 0-4-1.794-4-4zm12 9v-1h-2v1h2zm-6.438-3c-2.338 0-3.773-1.688-3.773-3.688 0-2 1.485-3.312 3.586-3.312 1.689 0 2.931.884 3.312 2.114.047.192.109.469.109.688 0 1.969-1.297 3.198-3.234 3.198zm9.438-3v-1h-2v1h2zm-3-6h-3v1h3v-1zm-4 0h-3v1h3v-1zm2 4v-1h-2v1h2z" /></svg></a>
                        <a href="https://www.indeed.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-purple-600"><path d="M20.812 5.18c-.375-.421-.884-.672-1.437-.672h-2.703v9.812c0 2.719-2.25 4.937-5 4.937-2.75 0-5-2.219-5-4.937v-9.812h-2.703c-.553 0-1.062.251-1.437.672s-.563 1.016-.219 1.469l8.453 9.531c.359.406.984.406 1.359 0l8.453-9.531c.344-.453.156-1.047-.219-1.469z" /></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
