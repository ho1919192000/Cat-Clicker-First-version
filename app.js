        $('#sidebarCollapse').on('click', function() {

            $('#sidebar').toggleClass('active');

        });



        let cats = [{

            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg',

            name: 'John',

            likes: 0

        }, {

            src: 'https://pbs.twimg.com/profile_images/875671244791840768/rUzo7sDc_400x400.jpg',

            name: 'Chewie',

            likes: 0

        }, {

            src: 'http://www.loc8tor.com/pets/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/l/i/lifestyle-1-600x600.jpg',

            name: 'Jill',

            likes: 0

        }, {

            src: 'https://i.pinimg.com/736x/c3/0e/9b/c30e9bbaef3532e9b5b8964024f25a71--princess-cat-princess-aurora.jpg',

            name: 'Mr.Nice',

            likes: 0

        }, {

            src: 'https://information-upload.s3.amazonaws.com/images/DRPaEs9WVivHAC0e3IlUDBqirJDtBzAQzMgpNlu0.jpeg',

            name: 'WTF',

            likes: 0

        }]



        cats.forEach(function(cat, index) {


            var sidebarHtmlSection = `<li class='sidebarItem'>${cat.name}</li>`;

            $('.list-unstyled').append(sidebarHtmlSection);

            $('.sidebarItem:last').click(function() {          

                    $('#catPic').attr('src', cat.src);

                    $('#catName').text(cat.name);

                    $('#catLikes').text(cat.likes);

                    $('#catId').text(index+1);   

            })

        })
  

        $('#picHolder').click(function() {

                let index = parseInt($('#catId').text()-1);

                let count = cats[index].likes;

                count++;

                cats[index].likes = count;

                $('#catLikes').text(count);

        })
