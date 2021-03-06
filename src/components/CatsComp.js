import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'


function Cats(props) {
  return (
    <div className="container-fluid">
      <div className="row row-content">
            <div className="col-lg-6 mt-5 card-header">
              <h2>Meet Our Cats!</h2>
              <img src="/assets/images/El-Gato-Coffee-House.png"  width="100%" />
            </div>
            <div className="col-lg-6 mt-5 card-header">
                <h2>Adopt!</h2>
                <OurCats />
            </div>
        </div>
    </div>
     
    
  );
}

    //Carousel
    const items = [
      {
        src:
        "/assets/images/altrescuecat1.jpg",
        //altText: "Slide 1",
        caption: "Shadow",
      },
      {
        src:
        "/assets/images/altrescuecat2.jpg",
        //altText: "Cinnamon",
        caption: "Cinnamon"
      },
      {
        src:
        "/assets/images/altrescuecat3.jpg",
        //altText: "Slide 3",
        caption: "Ripley, Newt and Jonesey"
      }
    ];
    
    class OurCats extends Component {
      constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex =
          this.state.activeIndex === items.length - 1
            ? 0
            : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex =
          this.state.activeIndex === 0
            ? items.length - 1
            : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {
        const { activeIndex } = this.state;
    
        const slides = items.map(item => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} width="100%" />
              <CarouselCaption
                //captionText={item.caption}
                captionHeader={item.caption}
              />
            </CarouselItem>
          );
        });
    
        return (
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators 
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        );
      }
    }
    

    




export default Cats;