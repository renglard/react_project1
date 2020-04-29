import React from "react";

function Body(props) {
  return (
    <div>
      <div className="main-body">
        <div className="body-paragraph">
          <h1 className="body-title">SERVICES</h1>
          <p>
            Our vision is simple. We want to create websites and applications
            with both
          </p>
          <p>
            high quality design and easy-to-access content. The finished product
            will be
          </p>
          <p>totally unique and represent awesomeness</p>
        </div>
        <div className="services-parent">
          <div className="circle1">
            <ServiceEmojis
              emoji={<i class="fas fa-laptop"></i>}
            ></ServiceEmojis>
            <Services service={"USER INTERFACE DESIGN"}></Services>
            <Examples example1={"Wireframing"}></Examples>
            <Examples example1={"Prototyping"}></Examples>
            <Examples example1={"Usability Testing"}></Examples>
          </div>
          <div className="circle2">
            <ServiceEmojis
              emoji={<i class="fas fa-pencil-alt"></i>}
            ></ServiceEmojis>
            <Services service={"CONCEPT AND IDEAS"}></Services>
            <Examples example1={"Coceptualization"}></Examples>
            <Examples example1={"Digital Branding"}></Examples>
            <Examples example1={"Product Strategy"}></Examples>
          </div>
          <div className="circle3">
            <ServiceEmojis
              emoji={<i class="fas fa-envelope-open-text"></i>}
            ></ServiceEmojis>
            <Services service={"DESIGN AND BRANDING"}></Services>
            <Examples example1={"Interaction Design"}></Examples>
            <Examples example1={"Graphic Design"}></Examples>
            <Examples example1={"Identity Design"}></Examples>
          </div>
        </div>
      </div>
      <div className="white-space"></div>
    </div>
  );
}
export default Body;

function ServiceEmojis(props) {
  return (
    <div>
      <div>{props.emoji}</div>
      <div>{props.service}</div>
      <div>{props.explanation}</div>
    </div>
  );
}

function Services(props) {
  return <div className="services">{props.service}</div>;
}

function Examples(props) {
  return (
    <div>
      <div>{props.example1}</div>
      <div>{props.example2}</div>
      <div>{props.example3}</div>
    </div>
  );
}
