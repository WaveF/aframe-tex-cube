AFRAME.registerComponent('tex-cube', {
    schema: {
        top:    { type:'string', default:'none' },
        bottom: { type:'string', default:'none' },
        front:  { type:'string', default:'none' },
        back:   { type:'string', default:'none' },
        left:   { type:'string', default:'none' },
        right:  { type:'string', default:'none' },
        width:  { type:'number', default:2 },
        height: { type:'number', default:2 },
        depth:  { type:'number', default:2 }
    },

    init: function() {
        var top, bottom, front, back, left, right, halfWidth, halfHeight, halfDepth;
        this.faceCount = 1;

        halfWidth  = this.data.width/2;
        halfHeight = this.data.height/2;
        halfDepth  = this.data.depth/2;

        top = this.createFace(this.data.top);
        top.setAttribute("position", {x:0, y:halfHeight, z:0});
        top.setAttribute("rotation", {x:-90, y:0, z:0});
        top.setAttribute("width", this.data.width);
        top.setAttribute("height", this.data.depth);

        bottom = this.createFace(this.data.bottom);
        bottom.setAttribute("position", {x:0, y:-halfHeight, z:0});
        bottom.setAttribute("rotation", {x:90, y:0, z:0});
        bottom.setAttribute("width", this.data.width);
        bottom.setAttribute("height", this.data.depth);

        front = this.createFace(this.data.front);
        front.setAttribute("position", {x:0, y:0, z:halfDepth});
        front.setAttribute("rotation", {x:0, y:0, z:0});
        front.setAttribute("width", this.data.width);
        front.setAttribute("height", this.data.height);

        back = this.createFace(this.data.back);
        back.setAttribute("position", {x:0, y:0, z:-halfDepth});
        back.setAttribute("rotation", {x:0, y:180, z:0});
        back.setAttribute("width", this.data.width);
        back.setAttribute("height", this.data.height);

        left = this.createFace(this.data.left);
        left.setAttribute("position", {x:-halfWidth, y:0, z:0});
        left.setAttribute("rotation", {x:0, y:-90, z:0});
        left.setAttribute("width", this.data.depth);
        left.setAttribute("height", this.data.height);

        right = this.createFace(this.data.right);
        right.setAttribute("position", {x:halfWidth, y:0, z:0});
        right.setAttribute("rotation", {x:0, y:90, z:0});
        right.setAttribute("width", this.data.depth);
        right.setAttribute("height", this.data.height);

        this.el.appendChild(top);
        this.el.appendChild(bottom);
        this.el.appendChild(front);
        this.el.appendChild(back);
        this.el.appendChild(left);
        this.el.appendChild(right);
    },

    createFace: function (data) {
        var face;
        if (data=='none') {
            face = document.createElement('a-plane');
            face.setAttribute('color', this.getRandomColor());
        } else if (data.indexOf('#')!=-1/* || 'rgb'.indexOf(data)!=-1 || 'rgba'.indexOf(data)!=-1 || 'hsl'.indexOf(data)!=-1*/) {
            face = document.createElement('a-plane');
            face.setAttribute('color', data);
        } else {
            face = document.createElement('a-image');
            face.setAttribute('src', data);
        }

        return face;
    },

    getRandomColor: function () {
        /*var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;*/

        var colors = ["#FFDC11", "#2EE26B", "#22D5D8", "#11AFFF", "#8B61EE", "#FF6898"];
        this.faceCount++;
        return colors[this.faceCount-2];
    }
});