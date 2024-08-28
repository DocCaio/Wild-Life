import styles from './thumbnail.module.css';

export default function Thumbnail() {
  return (
    <section className="thumbnail">
    <div className="item">
        <img src="image/img1.jpg">
        <div className="content">
            <div className="title">
                Name Slider
            </div>
            <div className="description">
                Description
            </div>
        </div>
    </div>
    <div className="item">
        <img src="image/img2.jpg">
        <div className="content">
            <div className="title">
                Name Slider
            </div>
            <div className="description">
                Description
            </div>
        </div>
    </div>
    <div className="item">
        <img src="image/img3.jpg">
        <div className="content">
            <div className="title">
                Name Slider
            </div>
            <div className="description">
                Description
            </div>
        </div>
    </div>
    <div className="item">
        <img src="image/img4.jpg">
        <div className="content">
            <div className="title">
                Name Slider
            </div>
            <div className="description">
                Description
            </div>
        </div>
    </div>
</section>
  );
}
