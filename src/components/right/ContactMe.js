const ContactMe = () => {
  return (
    <article id="contactme" className="right-section">
      <h2 className="contactme-hdr">Contact Me</h2>
      <form action="#">
        <div className="f-el">
          <label htmlFor="subj">Subject</label>
          <input type="text" name="subj" />
        </div>
        <div className="f-el">
          <label htmlFor="desc"> Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};

export default ContactMe;
