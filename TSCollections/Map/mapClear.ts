var map=new Map();  
map.set(1,"jQuery");  
map.set(2,"AngularJS");  
map.set(3,"Bootstrap");  
document.writeln("Size before invoking clear(): "+ map.size+"<br>");  
map.clear();  
document.writeln("Size after invoking clear(): "+map.size);