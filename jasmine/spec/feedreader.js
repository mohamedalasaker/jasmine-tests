// feedreader.js
 
$(function() {
    
    describe('RSS Feeds', function() {
        //check if allfeeds is defined and have feeds.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // loop throw each feed and ensure that its has a url
        it('allfeeds have url',function(){
            allFeeds.forEach(function(e){
                expect(e.url).toBeDefined();
                expect(e.url.length).not.toBe(0);
            })
        });


        // loop throw each feed and ensure that its has a name

        it("allfeeds have name",function(){
            allFeeds.forEach(function(e){
                expect(e.name).toBeDefined();
                expect(e.name.length).not.toBe(0);
            })
        })
        });


    // Write a new test suite named "The menu" 
        describe('the menu',function(){
           
        // check if menu is hidden by defult
        
        it("hidden",function(){
            
            expect($("body").hasClass("menu-hidden")).toBe(true);
            
            });
            
        

         
         // check if menu hidden or vissible
         it("changes of menu",function(){
            
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //looks for menu to be hidden

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
            //looks for menu to be visible
     
           
      
            
                   
           
        })    
        })
    // create new test suit name initial entries to make sure that loadFeed is called.
        describe("initial Entries",function(){


            beforeEach(function(done){
                loadFeed(1,done);
            })

        
        
        // suit to ensure that .feed container has atleast one .entry
            it("it has an entry",function(){
                let Entry = document.querySelectorAll(".feed .entry"); 
                
                expect(Entry.length).toBeGreaterThan(0);
                
                
            })
        

        })
     //Write a new test suite named "New Feed Selection" 
        describe("New feed selection",function(){
           let first,sec;
           
           beforeEach(function(done){
               loadFeed(3,function(){
                   first = document.querySelector(".feed").innerHTML;
                   loadFeed(2,function(){
                       sec = document.querySelector(".feed").innerHTML;
                       done()
                   })
               });
           })
           //to ensure that the content relly change.
           it("content changes",function(){
               expect(first).not.toBe(sec);
           })

        })
        

    
     
}());
