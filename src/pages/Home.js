import { Star, StarFill } from 'react-bootstrap-icons';

function Home() {
    return (
        <div>
            <section id="4col">
                <div class="container">
                    <div class="row">
                    <div class="col-12 col-md-4">
                        <figure>
                        <img src="https://cdn.pixabay.com/photo/2014/01/04/13/58/argument-238529_1280.jpg" class="w-100 mb-2" alt="" />
                        <figcaption>
                            <span class="color-text">[취미]</span>
                            <span class="place-name"> 격투기 챔피언 꿈나무 모임</span><br />
                            <span class="price">매주 1회, 나한테 지면 강퇴</span>
                            <span class="rating mx-2 my-0">
                            <StarFill></StarFill> 
                            <StarFill></StarFill> 
                            <StarFill></StarFill> 
                            <StarFill></StarFill> 
                            <Star></Star> 
                            </span>
                        </figcaption>
                        </figure>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;