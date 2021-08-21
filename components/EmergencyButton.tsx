
export const EmergencyButton = () => {
  return (
    <>
      <style jsx>{`
.btn,
a.btn,
button {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border: none;
}

.btn-emergency-real {
  position: relative;

  display: block;

  width: 200px;
  height: 130px;
  margin: 0 auto;
  background: transparent;
}

.btn-emergency-real:hover .btn-emergency-real-top {
  top: 5px;

  height: 55px;
}

.btn-emergency-real:active .btn-emergency-real-top {
  top: 20px;

  height: 40px;
}

.btn-emergency-real-top {
  position: absolute;
  top: 0;
  left: 20px;

  width: 160px;
  height: 60px;
  margin-top: 30px;

  user-select: none;

  -webkit-transition: all 0.1s;

  transition: all 0.1s;

  border-radius: 0 0 50% 50%;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#630909),
    to(#d62d2d)
  );
  background-image: -webkit-linear-gradient(right, #630909 0%, #d62d2d 100%);
  background-image: linear-gradient(to left, #630909 0%, #d62d2d 100%);
  -webkit-box-shadow: inset 0 -1px 10px 0 rgba(0, 0, 0, 0.9),
    0 5px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 -1px 10px 0 rgba(0, 0, 0, 0.9),
    0 5px 5px 0 rgba(0, 0, 0, 0.2);
}

.btn-emergency-real-top:before {
  position: absolute;
  top: -30px;
  left: 0;

  width: 160px;
  height: 60px;

  content: "";

  border-radius: 80px / 30px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#6c0c0b),
    to(#ed4c4c)
  );
  background-image: -webkit-linear-gradient(bottom, #6c0c0b 0%, #ed4c4c 100%);
  background-image: linear-gradient(to top, #6c0c0b 0%, #ed4c4c 100%);
  -webkit-box-shadow: 0 10px 28px 2px rgba(0, 0, 0, 0.2),
    inset 0 5px 10px 0 rgba(0, 0, 0, 0.2),
    inset 0 2px 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -2px 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 10px 5px rgba(237, 76, 76, 0.6),
    inset 5px 0 1px 1px rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 28px 2px rgba(0, 0, 0, 0.2),
    inset 0 5px 10px 0 rgba(0, 0, 0, 0.2),
    inset 0 2px 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -2px 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 10px 5px rgba(237, 76, 76, 0.6),
    inset 5px 0 1px 1px rgba(255, 255, 255, 0.3);
}

.btn-emergency-real-top span {
  font-size: 38px;
  font-weight: bold;

  position: absolute;
  top: -24px;
  left: 0;

  width: 100%;

  -webkit-transform: scaleY(0.75);

  transform: scaleY(0.75);
  text-align: center;

  color: #e48a8a;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5),
    1px 1px 5px rgba(255, 255, 255, 0.3);
}

.btn-emergency-real-bottom {
  position: absolute;
  top: 38px;
  left: 0;

  width: 200px;
  height: 80px;

  border-radius: 100px / 40px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f2f2f2),
    color-stop(48%, #b4b4b4),
    to(#767676)
  );
  background-image: -webkit-linear-gradient(
    left,
    #f2f2f2 0%,
    #b4b4b4 48%,
    #767676 100%
  );
  background-image: linear-gradient(
    to right,
    #f2f2f2 0%,
    #b4b4b4 48%,
    #767676 100%
  );
  -webkit-box-shadow: 0 8px 0 #c4cacc, inset 1px -1px 10px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 0 #c4cacc, inset 1px -1px 10px 0 rgba(0, 0, 0, 0.2);
}
      `}</style>
      <button className="btn-emergency-real">
        <span className="btn-emergency-real-bottom"></span>
        <span className="btn-emergency-real-top"><span>押す</span></span>
      </button>
    </>
  )
}
