
export const WarpView = () => {
  return (
  <>
    <style jsx>{`
#d1,
#d1:before,
#d1:after,
#d2,
#d2:before,
#d2:after,
#d3,
#d3:before,
#d3:after {
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display:block; margin:0; padding:0; width:100%; height:100%;}

#d1,
#d2,
#d3 {
	-webkit-transform-style:preserve-3d;
	-moz-transform-style:preserve-3d;
	-ms-transform-style:preserve-3d;
	-o-transform-style:preserve-3d;
	transform-style:preserve-3d;
}

#d1:before,
#d1:after,
#d2:before,
#d2:after,
#d3:before,
#d3:after {
/*background-image:url(star.png);*/
background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0BAMAAAA5+MK5AAAAJFBMVEX////////////////////////////////////////////////Vd7HLAAAADHRSTlMARFVmd4iZqrvM3e7VNOnbAAADp0lEQVR4Xu3dwZGbMBQG4BcTg3EuKYESKMElUIJLoARKoASXmmtmsoeNLUBC33fb0zKDEZLe+1HUB4BHfGiNkl2jIGPsgyEyBjR//XGJzMDFdOYT0HxjHtzHF+jrWYECsBiVP3MzK/ibHVGaINv57hqlm+MkeHqITQSK4LnxDHH1IubdmZoxSiETPxUdYKORK43WTB6wLqvsJWCatSSqg/XHXiB08QFAVwFLwuLeK3aC8uWw+z6PDSnw6kfXLnMub8GLTQxFbZAKKpRcwGjC7atM+2Z0/Kw8QBjvX1Ga/v8vnZ9nutpr5GqOe7lFA1aXQJIhps0pA0ub+4+JNcF6vPm6JIA9yB/19Rn3Slffd8/qXvQGiK/g/rOWUqJpEn0RYNqwnvd8dzlxsW9YBDnsPucis1eYzospsEWu7PkuoT2gO2V+YClnqNLpzqyvaBeAANi82fBlZTPFAeiFquuYCGJSTFfbYhlFWvDgAcBNV4fgP3gGkYE58lxE4H72uMo10rmXWUxGuwlCBgC3AqJxT2kWyDTVbk4CgPMq5DuxJ4il3j0AZ1w0Jc4Ox12vVECVZ7Ev5uXfIL3i43mxBJiCpju+wWYgfZwSXCutFtgpX+3ub8xoMaR4pw4nGaqgVQ1TQQCBZeMzDmBSJiweo0zRe+CVtJoLgPIagAW9kCN0zmevDlPKw8E8IzwSHEUHYMBg2LG5jKsLqaX51E+XJo9XMc/NbzP4Ro3vXtBVl5B/1NVvPtjmKLXUCiBhiJQ3Tif4Xf5eKYLbYEvpVcW2nlx3e/Deye2wTUD6Cr6NKoOulmd93ajAQyZP3WWTiu8aIJVMmoX4sPX/V8r3scQ29VWJPqyG63dBl7jjjN5mGDK6Ok2EDlCTUakQLBGFO3TZz6/tJvbo1WexbvcMUFj3C24r3ki3wGkebFMCYyo3+NuWVqXDyItM1V22LK3nvvN5QA8IGrNoRTbLZODFeD36GBWYvhRTz5iiVgqknsl5gy5kYVMdkrhPNOqO5FMOoznqBsKYbNUK057tINAXWRGjSz5aNF7UZ6NCACDTrgHQvMhaEZzNAIC+wca9PHa6C8L+oOI9BwAWjmCSBNL+INoDIHx7lj7HuZJpI+o+L3EVchrD7IwCQ8pDQkQ6cM6QohA380I/ouxekyAqTRflwBwMxzsNIn9VHAggCyqXgscFLJTX2ADgJIrVV7EUpE3obK3ji4agAOa0ArSzOTsTEozdj4xfDYMEWsb1VYA/KFNOcBXJpxsAAAAASUVORK5CYII=);
content:"";
	-webkit-animation:6s warp linear infinite;
	-moz-animation:6s warp linear infinite;
	-ms-animation:6s warp linear infinite;
	-o-animation:6s warp linear infinite;
	animation:6s warp linear infinite;
visibility:visible;
background-position:50% 50%
}

#d1:before {
background-position:-190px 80px
}
#d1:after {
background-position:90px -180px;
	-webkit-animation-delay:-2s;
	-moz-animation-delay:-2s;
	-ms-animation-delay:-2s;
	-o-animation-delay:-2s;
	animation-delay:-2s;
}
#d2:before {
background-position:210px 180px;
	-webkit-animation-delay:-4s;
	-moz-animation-delay:-4s;
	-ms-animation-delay:-4s;
	-o-animation-delay:-4s;
	animation-delay:-4s;
}
#d2:after   {
background-position:-120px 40px;
	-webkit-animation-delay:-6s;
	-moz-animation-delay:-6s;
	-ms-animation-delay:-6s;
	-o-animation-delay:-6s;
	animation-delay:-6s;
}
#d3:before {
background-position:130px 140px;
	-webkit-animation-delay:-8s;
	-moz-animation-delay:-8s;
	-ms-animation-delay:-8s;
	-o-animation-delay:-8s;
	animation-delay:-8s;
}
#d3:after {
background-position:-150px -90px;
	-webkit-animation-delay:-10s;
	-moz-animation-delay:-10s;
	-ms-animation-delay:-10s;
	-o-animation-delay:-10s;
	animation-delay:-10s;
}

/******************/

@-webkit-keyframes warp {
	from {opacity:0; -webkit-transform:rotate(-60deg) translateZ(-300px)}
	to {opacity:1; -webkit-transform:rotate(60deg) translateZ(300px)}
}
@-moz-keyframes warp {
	from {opacity:0; -moz-transform:rotate(-60deg) translateZ(-300px)}
	to {opacity:1; -moz-transform:rotate(60deg) translateZ(300px)}
}
@-ms-keyframes warp {
	from {opacity:0; -ms-transform:rotate(-60deg) translateZ(-300px)}
	to {opacity:1; -ms-transform:rotate(60deg) translateZ(300px)}
}
@-o-keyframes warp {
	from {opacity:0; -o-transform:rotate(-60deg) translateZ(-300px)}
	to {opacity:1; -o-transform:rotate(60deg) translateZ(300px)}
}
@keyframes warp{
	from {opacity:0; transform:rotate(-60deg) translateZ(-300px);}
	to {opacity:1; transform:rotate(60deg) translateZ(300px);}
}

/******************/
    `}</style>
    <div id="warp">
      <div id="d1">
        <div id="d2">
          <div id="d3">
          </div>
        </div>
      </div>
    </div>
  </>
  )
}