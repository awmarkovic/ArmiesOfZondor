Mandatory assignment for 'Webutvikling' subject in autumn 2024

# ArmiesOfZondor

Case: Armies of Zondor
Web application for a medieval army
Note that all screen shots below are to the pages and functionality, and do not represent the complete functionality or design. You can decide freely on design according to what you think will be/look best.

## Page 1. Resource shop.

Page where you buy army resources (warriors, animals, and war machines). PS! You are free to design the entire solution as you wish when it comes to layout, colors, font-family, icons etc. The screen shots are only to exemplify the functionality!

- The warriors should have the upper part of the page, while the animals and war machines have the lower part. They are all shown with category name (for example a “Snake” type warrior, image, and price.
- You should make 2 (or 3) separate Modules for the information:
  - Warriors
  - Other (animals and war machines)
- Each warrior to buy has (at least):
  - categoryName
  - priceGold
  - image
- A war machine costs gold, metal, and wood to buy.

## Page 2. Getting resources.

Page where you have to cut wood and mine metal and gold.

- When you click on the mine picture you will get a random amount of either gold or metal. There is a 75% chance of getting metal; thus 25% chance of getting gold.
- When you click on the woods picture you will get a random amount of wood.
- The numbers beside the gold, metal and wood pictures get updated as you get more gold, metal and wood. These resources need to be saved in localStorage.
- When you hover over the mines you should get the cursor of pickaxe-cursor.png
- When you hover over the woods you should get the cursor of axe-cursor.png

## Page 3. Your army

Page where you see your bought army resources.

## Other requirements and specification (for the entire solution)

- When something is bought, information will have to be stored to localStorage so that it can be shown in the “your army” page.
- Note that all warriors, war machines, and animals on all pages are generated with JS
- The solution is to be responsive
- All 3 pages will need access to localStorage regarding how much gold, metal, and wood you have.
- You are expected to add as much as possible different CSS properties to get as much experience with coding CSS / CSS framework
- Should make use of favicon
- Add search functionality with filter()
