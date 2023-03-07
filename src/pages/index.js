import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Jumbotron } from "@/components/Jumbotron";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="container pt-5 mt-4 mb-4 pb-5">
      <Navbar />
      <Jumbotron />
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Card
            title="Cute Dog #1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            image="https://photos.headshotcrew.com/styles/thumbnail_large/s3/photos/10/01/04/e4388e8aa35b32ca1a44b6d411123aaf.jpg?itok=sWaEgAZw"
            buttonUrl="https://www.google.com"
            buttonLabel="Adopt Me!"
          />{" "}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Card
            title="Cute Dog #2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            image="https://photos.headshotcrew.com/styles/thumbnail_large/s3/photos/04/34/35/735401c60bb683a7745b7aa2b21a9943.jpg?itok=gd3zWRiW"
            buttonUrl="https://www.google.com"
            buttonLabel="Adopt Me!"
          />{" "}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Card
            title="Cute Dog #3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            image="https://photos.headshotcrew.com/styles/thumbnail_large/s3/photos/10/58/01/f61f2c04a89bc2c4a842b87e8a42005c.jpg?itok=67W66FgR"
            buttonUrl="https://www.google.com"
            buttonLabel="Adopt Me!"
          />{" "}
        </div>
        <div className="col-lg-3 col-md-6  col-sm-12">
          <Card
            title="Cute Dog #4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            image="https://photos.headshotcrew.com/styles/thumbnail_large/s3/photos/10/09/46/0f0bf9cd9d48072f8a39df1537aa964f.jpg?itok=Dcqwr9Lc"
            buttonUrl="https://www.google.com"
            buttonLabel="Adopt Me!"
          />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
