function create() {
    // Get HTML head element  
    var head = document.getElementsByTagName('head')[0]; 

    // Create new link Element 
    var link = document.createElement('link'); 

    // set the attributes for link element 
    link.rel = 'stylesheet'; 
    
    //calling css file
    link.href = 'test.css';

    // Append link element to HTML head 
    head.appendChild(link);
}

