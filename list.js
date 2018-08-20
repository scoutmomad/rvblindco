function fillCategory(){ 
 // this function is used to fill the category list on load
addOption(document.drop_list.Category, "Faux Wood Blinds", "Faux Wood Blinds", "");
addOption(document.drop_list.Category, "Vertical Blinds", "Vertical Blinds", "");
addOption(document.drop_list.Category, "Pleated Door Windshield Blinds", "Pleated Door Windshield Blinds", "");
addOption(document.drop_list.Category, "Non Tension Blinds", "Non Tension Blinds", "");
addOption(document.drop_list.Category, "Tension Blinds", "Tension Blinds", "");
addOption(document.drop_list.Category, "Roller Shade Blinds", "Roller Shade Blinds", "");
addOption(document.drop_list.Category, "RV Mini Blinds", "RV Mini Blinds", "");
addOption(document.drop_list.Category, "Single Shade Blinds", "Single Shade Blinds", "");
}

function SelectSubCat(){
// ON selection of category this function will work

removeAllOptions(document.drop_list.SubCat);
addOption(document.drop_list.SubCat, "", "SubCat", "");

if(document.drop_list.Category.value == 'Faux Wood Blinds'){
addOption(document.drop_list.SubCat,"White", "White");
addOption(document.drop_list.SubCat,"116", "116");
addOption(document.drop_list.SubCat,"713", "713");
addOption(document.drop_list.SubCat, "719", "719");
addOption(document.drop_list.SubCat, "936", "936");
addOption(document.drop_list.SubCat, "Natural Oak", "Natural Oak");
}
if(document.drop_list.Category.value == "Vertical Blinds"){
addOption(document.drop_list.SubCat,"Caprice Garnet", "Caprice Garnet");
addOption(document.drop_list.SubCat,"Burgundy", "Burgundy");
addOption(document.drop_list.SubCat,"Caprice Royal Blue", "Caprice Royal Blue", "");
addOption(document.drop_list.SubCat,"Calgary Jade", "Calgary Jade");
addOption(document.drop_list.SubCat,"Calgary Flint", "Calgary Flint");
addOption(document.drop_list.SubCat,"Caprice Taupe", "Caprice Taupe", "");
addOption(document.drop_list.SubCat,"Linen", "Linen");
addOption(document.drop_list.SubCat,"Polo Slate", "Polo Slate");
addOption(document.drop_list.SubCat,"Gerri White", "Gerri White", "");
addOption(document.drop_list.SubCat,"Moss", "Moss");
addOption(document.drop_list.SubCat,"Butternut", "Butternut");
addOption(document.drop_list.SubCat,"Gerri Candlelight", "Gerri Candlelight", "");
}
if(document.drop_list.Category.value == 'Pleated Door Windshield Blinds'){
addOption(document.drop_list.SubCat,"Pleated Ivory 8 oz.", "Pleated Ivory 8 oz.");
addOption(document.drop_list.SubCat,"Pleated Gray 8 oz.", "Pleated Gray 8 oz.");
addOption(document.drop_list.SubCat,"Pleated Ivory 6 oz.", "Pleated Ivory 6 oz.");
addOption(document.drop_list.SubCat,"Pleated White 8 oz.", "Pleated White 8 oz.");
addOption(document.drop_list.SubCat,"Pleated Beige 8 oz.", "Pleated Beige 8 oz.");
addOption(document.drop_list.SubCat,"Pleated White 6 oz.", "Pleated White 6 oz.");
addOption(document.drop_list.SubCat,"Pleated Tan 6 oz.", "Pleated Tan 6 oz.");
addOption(document.drop_list.SubCat,"Pleated Suede 6 oz.", "Pleated Suede 6 oz.");
addOption(document.drop_list.SubCat,"Pleated Gray 6 oz.", "Pleated Gray 6 oz.");
addOption(document.drop_list.SubCat,"Shower Door White", "Shower Door White");
addOption(document.drop_list.SubCat,"Shower Door Ivory", "Shower Door Ivory");
addOption(document.drop_list.SubCat,"Shower Door Ecru 6 oz.", "Shower Door Ecru 6 oz.");
addOption(document.drop_list.SubCat,"Desert 6 oz.", "Desert 6 oz.");
addOption(document.drop_list.SubCat,"Pleated Bone", "Pleated Bone");
addOption(document.drop_list.SubCat,"Pleated Ash Gray", "Pleated Ash Gray");
addOption(document.drop_list.SubCat,"Pleated Glacier", "Pleated Glacier");
addOption(document.drop_list.SubCat,"Pleated Cotton", "Pleated Cotton");
addOption(document.drop_list.SubCat,"Pleated Suede", "Pleated Suede");
addOption(document.drop_list.SubCat,"Pleated Snow", "Pleated Snow");
addOption(document.drop_list.SubCat,"Pleated Buff Tan", "Pleated Buff Tan");
addOption(document.drop_list.SubCat,"Pleated Cappuccino", "Pleated Cappuccino");
addOption(document.drop_list.SubCat,"Pleated Almond", "Pleated Almond");
addOption(document.drop_list.SubCat,"Windshield Wrap Almond", "Windshield Wrap Almond");
addOption(document.drop_list.SubCat,"Windshield Wrap Snow", "Windshield Wrap Snow");
addOption(document.drop_list.SubCat,"Windshield Wrap Glacier", "Windshield Wrap Glacier");
addOption(document.drop_list.SubCat,"Windshield Wrap Ash Gray", "Windshield Wrap Ash Gray");
addOption(document.drop_list.SubCat,"Windshield Wrap Buff Tan", "Windshield Wrap Buff Tan");
addOption(document.drop_list.SubCat,"Windshield Wrap Suede", "Windshield Wrap Suede");
addOption(document.drop_list.SubCat,"Windshield Wrap Wedgewood", "Windshield Wrap Wedgewood");
}
if(document.drop_list.Category.value == 'Non Tension Blinds'){
addOption(document.drop_list.SubCat,"Specialty Main", "Specialty Main");
addOption(document.drop_list.SubCat,"Specialty 1", "Specialty 1");
addOption(document.drop_list.SubCat,"Specialty 2", "Specialty 2");
addOption(document.drop_list.SubCat, "Specialty 3", "Specialty 3");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cotton", "Stitchbond Opaque Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mushroom", "Stitchbond Opaque Mushroom");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cotton", "Stitchbond Opaque Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mushroom", "Stitchbond Opaque Mushroom");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Sand", "Stitchbond Opaque Sand");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Forest", "Stitchbond Opaque Forest");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Grape", "Stitchbond Opaque Grape");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Pebble", "Stitchbond Opaque Pebble");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cappuccino", "Stitchbond Opaque Cappuccino");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Linen Beige", "Stitchbond Opaque Linen Beige");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Slate", "Stitchbond Opaque Slate");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Tan", "Stitchbond Opaque Tan");
addOption(document.drop_list.SubCat, "Stitchbond Opaque White", "Stitchbond Opaque White");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Toast", "Stitchbond Opaque Toast");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Gray", "Stitchbond Opaque Gray");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Suede", "Stitchbond Opaque Suede");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Ash Gray", "Stitchbond Opaque Ash Gray");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Graphite", "Stitchbond Opaque Graphite");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Med Blue", "Stitchbond Opaque Med Blue");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Foam", "Stitchbond Opaque Foam");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Olive", "Stitchbond Opaque Olive");
addOption(document.drop_list.SubCat, "Stitchbond Opaque French Blue", "Stitchbond Opaque French Blue");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Spearmint", "Stitchbond Opaque Spearmint");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Purple Haze", "Stitchbond Opaque Purple Haze");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Ocean", "Stitchbond Opaque Ocean");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Desert", "Stitchbond Opaque Desert");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Nutmeg", "Stitchbond Opaque Nutmeg");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Macaroon", "Stitchbond Opaque Macaroon");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mulberry", "Stitchbond Opaque Mulberry");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Jade", "Stitchbond Opaque Jade");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Chancery", "Stitchbond Opaque Chancery");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Soft Blue", "Stitchbond Opaque Soft Blue");
addOption(document.drop_list.SubCat, "Intarsia Blackout Blackout Wedgewood", "Intarsia Blackout Backing Wedgewood");
addOption(document.drop_list.SubCat, "Intarsia Blackout Backing Linen", "Intarsia Blackout Backing Linen");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Maroon", "Intarsia Light Filter Backing Maroon");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Linen", "Intarsia Light Filter Backing Linen");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Alabaster", "Intarsia Light Filter Backing Alabaster");
addOption(document.drop_list.SubCat, "Intarsia Sheer Linen", "Intarsia Sheer Linen");
addOption(document.drop_list.SubCat, "Bellagio Opaque Cotton", "Bellagio Opaque Cotton");
addOption(document.drop_list.SubCat, "Bellagio Opaque Teakwood", "Bellagio Opaque Teakwood");
addOption(document.drop_list.SubCat, "Bellagio Opaque Bisque", "Bellagio Opaque Bisque");
addOption(document.drop_list.SubCat, "Bellagio Opaque Steel Blue", "Bellagio Opaque Steel Blue");
addOption(document.drop_list.SubCat, "Bellagio Opaque Buff", "Bellagio Opaque Buff");
addOption(document.drop_list.SubCat, "Bellagio Opaque Cashmere", "Bellagio Opaque Cashmere");
addOption(document.drop_list.SubCat, "Bellagio Opaque Ash", "Bellagio Opaque Ash");
addOption(document.drop_list.SubCat, "Bellagio Opaque Thyme", "Bellagio Opaque Thyme");
addOption(document.drop_list.SubCat, "Bellagio Opaque Bogata", "Bellagio Opaque Bogata");
addOption(document.drop_list.SubCat, "Bellagio Opaque Foam", "Bellagio Opaque Foam");
addOption(document.drop_list.SubCat, "Bellagio Opaque Soft Berry", "Bellagio Opaque Soft Berry");
addOption(document.drop_list.SubCat, "Bellagio Opaque Dark Gray", "Bellagio Opaque Dark Gray");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Cotton", "Bellagio Blackout Backing Cotton");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Teakwood", "Bellagio Blackout Backing Teakwood");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Bisque", "Bellagio Blackout Backing Bisque");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Steel Blue", "Bellagio Blackout Backing Steel Blue");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Buff", "Bellagio Blackout Backing Buff");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Putty", "Crepe Satin Blackout Backing Putty");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Eggshell", "Crepe Satin Blackout Backing Eggshell");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Chrome", "Crepe Satin Blackout Backing Chrome");
addOption(document.drop_list.SubCat, "Deco Day Silver", "Deco Day Silver");
addOption(document.drop_list.SubCat, "Deco Day Opal", "Deco Day Opal");
addOption(document.drop_list.SubCat, "Deco Day Antelope", "Deco Day Antelope");
addOption(document.drop_list.SubCat, "Deco Day Buff", "Deco Day Buff");
addOption(document.drop_list.SubCat, "Deco Day White", "Deco Day White");
addOption(document.drop_list.SubCat, "Deco Day Alabaster", "Deco Day Alabaster");
addOption(document.drop_list.SubCat, "Deco Day Intarsia Tan", "Deco Day Intarsia Tan");
addOption(document.drop_list.SubCat, "Deco Day Acorn", "Deco Day Acorn");
addOption(document.drop_list.SubCat, "Deco Day Ash", "Deco Day Ash");
addOption(document.drop_list.SubCat, "Stitchbond Night Acorn", "Stitchbond Night Acorn");
addOption(document.drop_list.SubCat, "Stitchbond Night Papyrus", "Stitchbond Night Papyrus");
addOption(document.drop_list.SubCat, "Stitchbond Night Wedgewood", "Stitchbond Night Wedgewood");
addOption(document.drop_list.SubCat, "Stitchbond Night Cappuccino", "Stitchbond Night  Cappuccino");
addOption(document.drop_list.SubCat, "Stitchbond Night Dark Taupe", "Stitchbond Night Dark Taupe");
addOption(document.drop_list.SubCat, "Stitchbond Night Suede", "Stitchbond Night Suede");
addOption(document.drop_list.SubCat, "Stitchbond Night Cotton", "Stitchbond Night Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Night Snow", "Stitchbond Night Snow");
addOption(document.drop_list.SubCat, "Stitchbond Night Buff Tan", "Stitchbond Night Buff Tan");
addOption(document.drop_list.SubCat, "Stitchbond Night Ash Gray", "Stitchbond Night Ash Gray");
addOption(document.drop_list.SubCat, "Stitchbond Night Sterling", "Stitchbond Night Sterling");
addOption(document.drop_list.SubCat, "Stitchbond Night Black", "Stitchbond Night Black");
addOption(document.drop_list.SubCat, "Stitchbond Night Gibraltar Fern", "Stitchbond Night Gibraltar Fern");
addOption(document.drop_list.SubCat, "Chenille Night Thistle", "Chenille Night Thistle");
addOption(document.drop_list.SubCat, "Chenille Night Pearl", "Chenille Nigh Pearl");
addOption(document.drop_list.SubCat, "Chenille Night Latte", "Chenille Night Latte");
addOption(document.drop_list.SubCat, "Chenille Night Mushroom", "Chenille Night Mushroom");
addOption(document.drop_list.SubCat, "Sundance Night Stone", "Sundance Night Stone");
addOption(document.drop_list.SubCat, "Laminated Stone", "Laminated Stone");
addOption(document.drop_list.SubCat, "Raleigh Night Caramel", "Raleigh Night Caramel");
addOption(document.drop_list.SubCat, "Raleigh Night Cream", "Raleigh Night Cream");
addOption(document.drop_list.SubCat, "Raleigh Night Cookie", "Raleigh Night Cookie");
addOption(document.drop_list.SubCat, "Raleigh Night Cappuccino", "Raleigh Night Cappuccino");
}
if(document.drop_list.Category.value == 'Tension Blinds'){
addOption(document.drop_list.SubCat,"Specialty Main", "Specialty Main");
addOption(document.drop_list.SubCat,"Specialty 1", "Specialty 1");
addOption(document.drop_list.SubCat,"Specialty 2", "Specialty 2");
addOption(document.drop_list.SubCat, "Specialty 3", "Specialty 3");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cotton", "Stitchbond Opaque Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mushroom", "Stitchbond Opaque Mushroom");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cotton", "Stitchbond Opaque Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mushroom", "Stitchbond Opaque Mushroom");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Sand", "Stitchbond Opaque Sand");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Forest", "Stitchbond Opaque Forest");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Grape", "Stitchbond Opaque Grape");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Pebble", "Stitchbond Opaque Pebble");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cappuccino", "Stitchbond Opaque Cappuccino");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Linen Beige", "Stitchbond Opaque Linen Beige");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Slate", "Stitchbond Opaque Slate");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Tan", "Stitchbond Opaque Tan");
addOption(document.drop_list.SubCat, "Stitchbond Opaque White", "Stitchbond Opaque White");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Toast", "Stitchbond Opaque Toast");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Gray", "Stitchbond Opaque Gray");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Suede", "Stitchbond Opaque Suede");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Ash Gray", "Stitchbond Opaque Ash Gray");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Graphite", "Stitchbond Opaque Graphite");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Med Blue", "Stitchbond Opaque Med Blue");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Foam", "Stitchbond Opaque Foam");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Olive", "Stitchbond Opaque Olive");
addOption(document.drop_list.SubCat, "Stitchbond Opaque French Blue", "Stitchbond Opaque French Blue");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Spearmint", "Stitchbond Opaque Spearmint");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Purple Haze", "Stitchbond Opaque Purple Haze");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Ocean", "Stitchbond Opaque Ocean");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Desert", "Stitchbond Opaque Desert");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Nutmeg", "Stitchbond Opaque Nutmeg");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Macaroon", "Stitchbond Opaque Macaroon");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mulberry", "Stitchbond Opaque Mulberry");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Jade", "Stitchbond Opaque Jade");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Chancery", "Stitchbond Opaque Chancery");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Soft Blue", "Stitchbond Opaque Soft Blue");
addOption(document.drop_list.SubCat, "Intarsia Blackout Blackout Wedgewood", "Intarsia Blackout Backing Wedgewood");
addOption(document.drop_list.SubCat, "Intarsia Blackout Backing Linen", "Intarsia Blackout Backing Linen");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Maroon", "Intarsia Light Filter Backing Maroon");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Linen", "Intarsia Light Filter Backing Linen");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Alabaster", "Intarsia Light Filter Backing Alabaster");
addOption(document.drop_list.SubCat, "Intarsia Sheer Linen", "Intarsia Sheer Linen");
addOption(document.drop_list.SubCat, "Bellagio Opaque Cotton", "Bellagio Opaque Cotton");
addOption(document.drop_list.SubCat, "Bellagio Opaque Teakwood", "Bellagio Opaque Teakwood");
addOption(document.drop_list.SubCat, "Bellagio Opaque Bisque", "Bellagio Opaque Bisque");
addOption(document.drop_list.SubCat, "Bellagio Opaque Steel Blue", "Bellagio Opaque Steel Blue");
addOption(document.drop_list.SubCat, "Bellagio Opaque Buff", "Bellagio Opaque Buff");
addOption(document.drop_list.SubCat, "Bellagio Opaque Cashmere", "Bellagio Opaque Cashmere");
addOption(document.drop_list.SubCat, "Bellagio Opaque Ash", "Bellagio Opaque Ash");
addOption(document.drop_list.SubCat, "Bellagio Opaque Thyme", "Bellagio Opaque Thyme");
addOption(document.drop_list.SubCat, "Bellagio Opaque Bogata", "Bellagio Opaque Bogata");
addOption(document.drop_list.SubCat, "Bellagio Opaque Foam", "Bellagio Opaque Foam");
addOption(document.drop_list.SubCat, "Bellagio Opaque Soft Berry", "Bellagio Opaque Soft Berry");
addOption(document.drop_list.SubCat, "Bellagio Opaque Dark Gray", "Bellagio Opaque Dark Gray");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Cotton", "Bellagio Blackout Backing Cotton");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Teakwood", "Bellagio Blackout Backing Teakwood");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Bisque", "Bellagio Blackout Backing Bisque");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Steel Blue", "Bellagio Blackout Backing Steel Blue");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Buff", "Bellagio Blackout Backing Buff");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Putty", "Crepe Satin Blackout Backing Putty");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Eggshell", "Crepe Satin Blackout Backing Eggshell");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Chrome", "Crepe Satin Blackout Backing Chrome");
addOption(document.drop_list.SubCat, "Deco Day Silver", "Deco Day Silver");
addOption(document.drop_list.SubCat, "Deco Day Opal", "Deco Day Opal");
addOption(document.drop_list.SubCat, "Deco Day Antelope", "Deco Day Antelope");
addOption(document.drop_list.SubCat, "Deco Day Buff", "Deco Day Buff");
addOption(document.drop_list.SubCat, "Deco Day White", "Deco Day White");
addOption(document.drop_list.SubCat, "Deco Day Alabaster", "Deco Day Alabaster");
addOption(document.drop_list.SubCat, "Deco Day Intarsia Tan", "Deco Day Intarsia Tan");
addOption(document.drop_list.SubCat, "Deco Day Acorn", "Deco Day Acorn");
addOption(document.drop_list.SubCat, "Deco Day Ash", "Deco Day Ash");
addOption(document.drop_list.SubCat, "Stitchbond Night Acorn", "Stitchbond Night Acorn");
addOption(document.drop_list.SubCat, "Stitchbond Night Papyrus", "Stitchbond Night Papyrus");
addOption(document.drop_list.SubCat, "Stitchbond Night Wedgewood", "Stitchbond Night Wedgewood");
addOption(document.drop_list.SubCat, "Stitchbond Night Cappuccino", "Stitchbond Night  Cappuccino");
addOption(document.drop_list.SubCat, "Stitchbond Night Dark Taupe", "Stitchbond Night Dark Taupe");
addOption(document.drop_list.SubCat, "Stitchbond Night Suede", "Stitchbond Night Suede");
addOption(document.drop_list.SubCat, "Stitchbond Night Cotton", "Stitchbond Night Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Night Snow", "Stitchbond Night Snow");
addOption(document.drop_list.SubCat, "Stitchbond Night Buff Tan", "Stitchbond Night Buff Tan");
addOption(document.drop_list.SubCat, "Stitchbond Night Ash Gray", "Stitchbond Night Ash Gray");
addOption(document.drop_list.SubCat, "Stitchbond Night Sterling", "Stitchbond Night Sterling");
addOption(document.drop_list.SubCat, "Stitchbond Night Black", "Stitchbond Night Black");
addOption(document.drop_list.SubCat, "Stitchbond Night Gibraltar Fern", "Stitchbond Night Gibraltar Fern");
addOption(document.drop_list.SubCat, "Chenille Night Thistle", "Chenille Night Thistle");
addOption(document.drop_list.SubCat, "Chenille Night Pearl", "Chenille Nigh Pearl");
addOption(document.drop_list.SubCat, "Chenille Night Latte", "Chenille Night Latte");
addOption(document.drop_list.SubCat, "Chenille Night Mushroom", "Chenille Night Mushroom");
addOption(document.drop_list.SubCat, "Sundance Night Stone", "Sundance Night Stone");
addOption(document.drop_list.SubCat, "Laminated Stone", "Laminated Stone");
addOption(document.drop_list.SubCat, "Raleigh Night Caramel", "Raleigh Night Caramel");
addOption(document.drop_list.SubCat, "Raleigh Night Cream", "Raleigh Night Cream");
addOption(document.drop_list.SubCat, "Raleigh Night Cookie", "Raleigh Night Cookie");
addOption(document.drop_list.SubCat, "Raleigh Night Cappuccino", "Raleigh Night Cappuccino");
}
if(document.drop_list.Category.value == 'Roller Shade Blinds'){
addOption(document.drop_list.SubCat,"Champagne Boucle", "Champagne Boucle");
addOption(document.drop_list.SubCat,"Linen Oyster", "Linen Oyster");
addOption(document.drop_list.SubCat,"Linen Suede", "Linen Suede");
addOption(document.drop_list.SubCat, "Chestnut", "Chestnut");
addOption(document.drop_list.SubCat, "Black", "Black");
}
if(document.drop_list.Category.value == 'RV Mini Blinds'){
addOption(document.drop_list.SubCat,"Beige", "Beige");
addOption(document.drop_list.SubCat,"Fawn", "Fawn");
addOption(document.drop_list.SubCat,"Fawn Pearl", "Fawn Pearl");
addOption(document.drop_list.SubCat, "Beige Pearl", "Beige Pearl");
addOption(document.drop_list.SubCat, "Alabaster", "Alabaster");
addOption(document.drop_list.SubCat, "Porcelain Pearl", "Porcelain Pearl");
addOption(document.drop_list.SubCat,"White Satin", "White Satin");
addOption(document.drop_list.SubCat,"Black Satin", "Black Satin");
addOption(document.drop_list.SubCat, "Brushed Aluminum", "Brushed Aluminum");
addOption(document.drop_list.SubCat, "Alabaster Pearl", "Alabaster Pearl");
addOption(document.drop_list.SubCat, "Shell", "Shell");
}
if(document.drop_list.Category.value == 'Single Shade Blinds'){
addOption(document.drop_list.SubCat,"Specialty Main", "Specialty Main");
addOption(document.drop_list.SubCat,"Specialty 1", "Specialty 1");
addOption(document.drop_list.SubCat,"Specialty 2", "Specialty 2");
addOption(document.drop_list.SubCat, "Specialty 3", "Specialty 3");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cotton", "Stitchbond Opaque Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mushroom", "Stitchbond Opaque Mushroom");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cotton", "Stitchbond Opaque Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mushroom", "Stitchbond Opaque Mushroom");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Sand", "Stitchbond Opaque Sand");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Forest", "Stitchbond Opaque Forest");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Grape", "Stitchbond Opaque Grape");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Pebble", "Stitchbond Opaque Pebble");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Cappuccino", "Stitchbond Opaque Cappuccino");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Linen Beige", "Stitchbond Opaque Linen Beige");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Slate", "Stitchbond Opaque Slate");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Tan", "Stitchbond Opaque Tan");
addOption(document.drop_list.SubCat, "Stitchbond Opaque White", "Stitchbond Opaque White");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Toast", "Stitchbond Opaque Toast");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Gray", "Stitchbond Opaque Gray");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Suede", "Stitchbond Opaque Suede");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Ash Gray", "Stitchbond Opaque Ash Gray");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Graphite", "Stitchbond Opaque Graphite");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Med Blue", "Stitchbond Opaque Med Blue");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Foam", "Stitchbond Opaque Foam");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Olive", "Stitchbond Opaque Olive");
addOption(document.drop_list.SubCat, "Stitchbond Opaque French Blue", "Stitchbond Opaque French Blue");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Spearmint", "Stitchbond Opaque Spearmint");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Purple Haze", "Stitchbond Opaque Purple Haze");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Ocean", "Stitchbond Opaque Ocean");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Desert", "Stitchbond Opaque Desert");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Nutmeg", "Stitchbond Opaque Nutmeg");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Macaroon", "Stitchbond Opaque Macaroon");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Mulberry", "Stitchbond Opaque Mulberry");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Jade", "Stitchbond Opaque Jade");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Chancery", "Stitchbond Opaque Chancery");
addOption(document.drop_list.SubCat, "Stitchbond Opaque Soft Blue", "Stitchbond Opaque Soft Blue");
addOption(document.drop_list.SubCat, "Intarsia Blackout Blackout Wedgewood", "Intarsia Blackout Backing Wedgewood");
addOption(document.drop_list.SubCat, "Intarsia Blackout Backing Linen", "Intarsia Blackout Backing Linen");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Maroon", "Intarsia Light Filter Backing Maroon");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Linen", "Intarsia Light Filter Backing Linen");
addOption(document.drop_list.SubCat, "Intarsia Light Filter Backing Alabaster", "Intarsia Light Filter Backing Alabaster");
addOption(document.drop_list.SubCat, "Intarsia Sheer Linen", "Intarsia Sheer Linen");
addOption(document.drop_list.SubCat, "Bellagio Opaque Cotton", "Bellagio Opaque Cotton");
addOption(document.drop_list.SubCat, "Bellagio Opaque Teakwood", "Bellagio Opaque Teakwood");
addOption(document.drop_list.SubCat, "Bellagio Opaque Bisque", "Bellagio Opaque Bisque");
addOption(document.drop_list.SubCat, "Bellagio Opaque Steel Blue", "Bellagio Opaque Steel Blue");
addOption(document.drop_list.SubCat, "Bellagio Opaque Buff", "Bellagio Opaque Buff");
addOption(document.drop_list.SubCat, "Bellagio Opaque Cashmere", "Bellagio Opaque Cashmere");
addOption(document.drop_list.SubCat, "Bellagio Opaque Ash", "Bellagio Opaque Ash");
addOption(document.drop_list.SubCat, "Bellagio Opaque Thyme", "Bellagio Opaque Thyme");
addOption(document.drop_list.SubCat, "Bellagio Opaque Bogata", "Bellagio Opaque Bogata");
addOption(document.drop_list.SubCat, "Bellagio Opaque Foam", "Bellagio Opaque Foam");
addOption(document.drop_list.SubCat, "Bellagio Opaque Soft Berry", "Bellagio Opaque Soft Berry");
addOption(document.drop_list.SubCat, "Bellagio Opaque Dark Gray", "Bellagio Opaque Dark Gray");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Cotton", "Bellagio Blackout Backing Cotton");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Teakwood", "Bellagio Blackout Backing Teakwood");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Bisque", "Bellagio Blackout Backing Bisque");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Steel Blue", "Bellagio Blackout Backing Steel Blue");
addOption(document.drop_list.SubCat, "Bellagio Blackout Backing Buff", "Bellagio Blackout Backing Buff");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Putty", "Crepe Satin Blackout Backing Putty");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Eggshell", "Crepe Satin Blackout Backing Eggshell");
addOption(document.drop_list.SubCat, "Crepe Satin Blackout Backing Chrome", "Crepe Satin Blackout Backing Chrome");
addOption(document.drop_list.SubCat, "Deco Day Silver", "Deco Day Silver");
addOption(document.drop_list.SubCat, "Deco Day Opal", "Deco Day Opal");
addOption(document.drop_list.SubCat, "Deco Day Antelope", "Deco Day Antelope");
addOption(document.drop_list.SubCat, "Deco Day Buff", "Deco Day Buff");
addOption(document.drop_list.SubCat, "Deco Day White", "Deco Day White");
addOption(document.drop_list.SubCat, "Deco Day Alabaster", "Deco Day Alabaster");
addOption(document.drop_list.SubCat, "Deco Day Intarsia Tan", "Deco Day Intarsia Tan");
addOption(document.drop_list.SubCat, "Deco Day Acorn", "Deco Day Acorn");
addOption(document.drop_list.SubCat, "Deco Day Ash", "Deco Day Ash");
addOption(document.drop_list.SubCat, "Stitchbond Night Acorn", "Stitchbond Night Acorn");
addOption(document.drop_list.SubCat, "Stitchbond Night Papyrus", "Stitchbond Night Papyrus");
addOption(document.drop_list.SubCat, "Stitchbond Night Wedgewood", "Stitchbond Night Wedgewood");
addOption(document.drop_list.SubCat, "Stitchbond Night Cappuccino", "Stitchbond Night  Cappuccino");
addOption(document.drop_list.SubCat, "Stitchbond Night Dark Taupe", "Stitchbond Night Dark Taupe");
addOption(document.drop_list.SubCat, "Stitchbond Night Suede", "Stitchbond Night Suede");
addOption(document.drop_list.SubCat, "Stitchbond Night Cotton", "Stitchbond Night Cotton");
addOption(document.drop_list.SubCat, "Stitchbond Night Snow", "Stitchbond Night Snow");
addOption(document.drop_list.SubCat, "Stitchbond Night Buff Tan", "Stitchbond Night Buff Tan");
addOption(document.drop_list.SubCat, "Stitchbond Night Ash Gray", "Stitchbond Night Ash Gray");
addOption(document.drop_list.SubCat, "Stitchbond Night Sterling", "Stitchbond Night Sterling");
addOption(document.drop_list.SubCat, "Stitchbond Night Black", "Stitchbond Night Black");
addOption(document.drop_list.SubCat, "Stitchbond Night Gibraltar Fern", "Stitchbond Night Gibraltar Fern");
addOption(document.drop_list.SubCat, "Chenille Night Thistle", "Chenille Night Thistle");
addOption(document.drop_list.SubCat, "Chenille Night Pearl", "Chenille Nigh Pearl");
addOption(document.drop_list.SubCat, "Chenille Night Latte", "Chenille Night Latte");
addOption(document.drop_list.SubCat, "Chenille Night Mushroom", "Chenille Night Mushroom");
addOption(document.drop_list.SubCat, "Sundance Night Stone", "Sundance Night Stone");
addOption(document.drop_list.SubCat, "Laminated Stone", "Laminated Stone");
addOption(document.drop_list.SubCat, "Raleigh Night Caramel", "Raleigh Night Caramel");
addOption(document.drop_list.SubCat, "Raleigh Night Cream", "Raleigh Night Cream");
addOption(document.drop_list.SubCat, "Raleigh Night Cookie", "Raleigh Night Cookie");
addOption(document.drop_list.SubCat, "Raleigh Night Cappuccino", "Raleigh Night Cappuccino");

}
}

////////////////// 

function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		//selectbox.options.remove(i);
		selectbox.remove(i);
	}
}


function addOption(selectbox, value, text )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;

	selectbox.options.add(optn);
}