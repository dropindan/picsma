$(function () {
    var maxW = 800, maxH = 600;
    var can = $('#canvas')[0], ctx = can.getContext('2d');
    var BIGENDIAN = pTools.isBigEndian();
    var dropArea = document;

    dropArea.addEventListener('dragenter', stopDefault, false);
    dropArea.addEventListener('dragover', stopDefault, false);
    dropArea.addEventListener('dragleave', stopDefault, false);
    dropArea.addEventListener('drop', dropHandler, false);

    function stopDefault(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dropHandler(e) {
        stopDefault(e);
        var file = e.dataTransfer.files[0];
        if (!file.type.match(/image.*/)) return;
        var reader = new FileReader();
        reader.onerror = function (e) {
            alert('Error: ' + e.target.error);
        };
        reader.onload = (function (aFile) {
            return function (evt) {
                var tmpimg = new Image();
                var newW, newH;
                tmpimg.src = evt.target.result;
                tmpimg.onload = function () {
                    if (tmpimg.width > maxW || tmpimg.height > maxH) {
                        var ratioW = tmpimg.width / maxW;
                        var ratioH = tmpimg.height / maxH;
                        if (ratioW > ratioH) {
                            newW = maxW;
                            newH = tmpimg.height / ratioW;
                        } else {
                            newH = maxH;
                            newW = tmpimg.width / ratioH;
                        }
                    } else {
                        newW = tmpimg.width;
                        newH = tmpimg.height;
                    }
                    can.width = newW;
                    can.height = newH;
                    ctx.drawImage(tmpimg, 0, 0, newW, newH);
                }
            }
        })(file);
        reader.readAsDataURL(file);
    }


    /*   ENTRY POINT    */
    var exampleImg= new Image();
    exampleImg.src= 'img/ressources/example.jpg';
    exampleImg.onload = function(){
        can.width=this.width;
        can.height=this.height;
        ctx.drawImage(this,0,0);
        $('#filter0')[0].getContext('2d').drawImage(this,-100,-100);
        $('#filter0')[0].getContext('2d').grayscale();
        $('#filter1')[0].getContext('2d').drawImage(this,0,0);
        $('#filter2')[0].getContext('2d').drawImage(this,0,0);
        $('#filter3')[0].getContext('2d').drawImage(this,0,0);
    };

})