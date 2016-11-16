var prev = '';
var timeouts = [];
      // Component to change to random color on hover in.
      AFRAME.registerComponent('cursor-enter', {
        init: function () {
          this.el.addEventListener('mouseenter', function (evt) {
            prev = this.getAttribute('material','color');
            console.log(prev);
            this.setAttribute('material', 'color', 'yellow');
            var cursor = document.querySelector('#CURSOR');
            cursor.hover = true;
            console.log("Cursor Hover: " + cursor.hover);
            var redirect = this.getAttribute('redirect');

            //start timeout count
            timeouts.push(setTimeout(function(){
              //if cursor is hovering redirect
              if(cursor.hover == true){
                console.log("Redirect");
                try {
                  window.location.href = "/" + redirect + "";
                } catch(e){
                  alert("URL not found");
                  console.log(e);
                }

              }
              // if cursor gets set to hover - false from cursor leave component ignore.
              else if (cursor.hover == false){
                console.log("No redirect");
              }
            }, 3200));
          });
        }
      });

      // Component to change to random color on hover out.
      AFRAME.registerComponent('cursor-leave', {
        init: function () {
          this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('material', 'color', prev.color);
            var cursor = document.querySelector('#CURSOR');

            // if cursor leaves this entity then set its hover to false;
            cursor.hover = false;
            // clear all timeouts.
            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            timeouts =[];
            console.log("Cursor Hover: " + cursor.hover);
          });
        }
      });

      var prev = '';
      // Component to change to random color on hover in.
      AFRAME.registerComponent('X-enter', {
        init: function () {
          this.el.addEventListener('mouseenter', function (evt) {
            // because our X is made of two rectangles we have two entity
            // components to change the color off.
            document.querySelector('#X1').setAttribute('material', 'color', 'blue')
            document.querySelector('#X2').setAttribute('material', 'color', 'blue')

            var cursor = document.querySelector('#CURSOR');

            cursor.Xhover = true;
            console.log("X Hover: " + cursor.Xhover);
            var redirect = this.getAttribute('redirect');

            //start timeout count
            timeouts.push(setTimeout(function(){
              //if cursor is hovering redirect
              if(cursor.Xhover == true){
                console.log("Redirect");
                try {
                  // redirect to home page.
                  window.location.href = "/home";
                } catch(e){
                  alert("URL not found");
                  console.log(e);
                }

              }
              // if cursor gets set to hover - false from cursor leave component ignore.
              else if (cursor.Xhover == false){
                console.log("No redirect");
              }
            }, 3200));

          });
        }

    });

      // Component to change to random color on hover out.
      AFRAME.registerComponent('X-leave', {
        init: function () {
          this.el.addEventListener('mouseleave', function (evt) {
            document.querySelector('#X1').setAttribute('material', 'color', 'red')
            document.querySelector('#X2').setAttribute('material', 'color', 'red')

            var cursor = document.querySelector('#CURSOR');

            // if cursor leaves this entity then set its hover to false;
            cursor.Xhover = false;
            // clear all timeouts.
            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            timeouts =[];
            console.log("X Hover: " + cursor.Xhover);
          });
        }
      });

      var testFuse = function(){
        document.querySelector('#sphere').addEventListener('fuse', function (val) {
          console.log(val);
          if(val == true){
            console.log("fused");
          }
          console.log("value is " + val);
        });
      }
