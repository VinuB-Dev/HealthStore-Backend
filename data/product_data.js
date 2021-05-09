const products = [{
  name: "Happilo Premium International Healthy Nutmix",
  imageURL: "https://rukminim1.flixcart.com/image/612/612/kgcl7680/nut-dry-fruit/n/g/g/35-premium-international-healthy-nutmix-pouch-happilo-original-imafwhm9rgyxcxw2.jpeg?q=70",
  rating: 4.2,
  no_of_rating: 17200,
  original_price: 70,
  final_price: 60,
  hasFastDelivery: true,
  hasCashOnDelivery: true,
  isInStock: true,
  description: "Healthy Premium International Healthy Nutmix, contains all healthy nuts"
}, {
  name: "Yogabar  Trail Mix Nuts & Seeds",
  imageURL: "https://rukminim1.flixcart.com/image/612/612/kb2jmvk0/nut-dry-fruit/j/b/g/400-roasted-super-snacks-nuts-seeds-mix-tangy-tomato-40g-10-pack-original-imafshvz5cfgkrg5.jpeg?q=70",
  rating: 4,
  no_of_rating: 22,
  original_price: 240,
  final_price: 220,
  hasFastDelivery: true,
  hasCashOnDelivery: false,
  isInStock: true,
  description: "Yogabar Roasted Super Snacks Nuts & Seeds Mix - Pizza Oregano Nuts & Seeds are the heroes of wholesome snacking. And Yogabar offers a wide variety of delicious Nuts & Seeds mix. When you're looking for snacks with protein and nutrients, grab a handful of Yogabar Nuts & Seeds Mix pack. Our mixed nuts combine your favourite nuts, like cashews, almonds, pecans and peanuts for nutritious snacks like no other. Keep our mixed nuts on hand for quick snacks the whole family will enjoy."
},
{
  name: "Resh Blue adjustable Ball Bearing Skipping Rope",
  imageURL: "https://rukminim1.flixcart.com/image/612/612/jxuq07k0/skipping-rope/v/d/w/blue-adjustable-rbabbsr-01-resh-original-imafg7agcht9qhh5.jpeg?q=70",
  rating: 4.2,
  no_of_rating: 5800,
  original_price: 299,
  final_price: 139,
  hasFastDelivery: true,
  hasCashOnDelivery: true,
  isInStock: true,
  description: "Skipping rope is best aerobic exercises for burning a lot caloric , slimming down improving flexibility developing care strength and good for heart."
},
{
  name: "Polka HEALTHY SNACKS ,PACK OF 3",
  imageURL: "https://rukminim1.flixcart.com/image/612/612/kmmcrrk0/snack-savourie/q/x/e/255-healthy-snacks-pack-of-3-freshly-baked-makhana-peri-peri-tin-original-imagfh8gyhquwbd6.jpeg?q=70",
  rating: 4.2,
  no_of_rating: 3200,
  original_price: 465,
  final_price: 404,
  hasFastDelivery: false,
  hasCashOnDelivery: false,
  isInStock: true,
  description: "healthy baked makhana. Enjoy."
},
{
  name: "Healthy Treat Roasted Navratan Mix Combo 900 gm",
  imageURL: "https://rukminim1.flixcart.com/image/832/832/k91o6fk0/snack-savourie/a/z/h/900-roasted-navratan-mix-combo-900-gm-pack-of-6-100-gm-each-original-imafqxbzgtas6wbh.jpeg?q=70",
  rating: 4,
  no_of_rating: 260,
  original_price: 465,
  final_price: 404,
  hasFastDelivery: false,
  hasCashOnDelivery: true,
  isInStock: true,
  description: " Roasted Navratna Mixture from healthy treat is a 100 % Roasted Namkeen which is a mixture of 9 items which are a perfect additon to your weight loss diet."
},
{
  name: "Sugar free Gold 500 Pellets Sweetener  (50 g)",
  imageURL: "https://rukminim1.flixcart.com/image/832/832/k66sh3k0/artificial-sweetener/t/z/n/50-gold-500-pellets-sugarfree-original-imafzpzpvjsz5q7y.jpeg?q=70",
  rating: 4.2,
  no_of_rating: 3200,
  original_price: 474,
  final_price: 369,
  hasFastDelivery: false,
  hasCashOnDelivery: true,
  isInStock: true,
  description: " Roasted Navratna Mixture from healthy treat is a 100 % Roasted Namkeen which is a mixture of 9 items which are a perfect additon to your weight loss diet."
},
{
  name: "WOW Life Science 400mL Raw Vinegar  (400 ml)",
  imageURL: "https://rukminim1.flixcart.com/image/612/612/jqgy3rk0/energy-sport-drink-mix/c/z/a/400-400ml-raw-wow-life-science-original-imafcgh9xmahfyzy.jpeg?q=70",
  rating: 4,
  no_of_rating: 4500,
  original_price: 399,
  final_price: 323,
  hasFastDelivery: true,
  hasCashOnDelivery: true,
  isInStock: true,
  description: "WOW Apple Cider Vinegar is made from the juice of the finest quality of select apples grown in the orchard of the pristine hills of the Himalayas. Wow Apple Cider Vinegar is 1% natural, raw unfiltered & non pasteurised retaining the natural residue and goodness as a mother of vinegars with its richness in natural components"
},
{
  name: "Neuherbs Organic Apple Cider Vinegar With Mother",
  imageURL: "https://rukminim1.flixcart.com/image/416/416/k1wgx3k0/vinegar/v/a/a/500-organic-apple-cider-vinegar-with-mother-neuherbs-original-imafhdfbkz6rcq8v.jpeg?q=70",
  rating: 4.2,
  no_of_rating: 1200,
  original_price: 499,
  final_price: 354,
  hasFastDelivery: false,
  hasCashOnDelivery: true,
  isInStock: true,
  description: "Neuherbs Organic Apple Cider Vinegar has been used to address different health issues for a long time and popular among fitness freaks! It is also used in marinade recipes and salad dressings. "
},
{
  name: "PATANJALI Chyawanprash  (1 kg)",
  imageURL: "https://rukminim1.flixcart.com/image/612/612/j8osu4w0/chyawanprash/u/g/z/1-chyawanprash-patanjali-original-imaeymvf8tzsbnpz.jpeg?q=70",
  rating: 4.2,
  no_of_rating: 1200,
  original_price: 190,
  final_price: 189,
  hasFastDelivery: false,
  hasCashOnDelivery: false,
  isInStock: true,
  description: "Good imunity booster "
},
{
  name: "Zandu Kesari Jivan  (450 g)",
  imageURL: "https://rukminim1.flixcart.com/image/832/832/jseyoi80/chyawanprash/x/j/4/450-kesari-jivan-zandu-original-imafdztsbzwx6mh7.jpeg?q=70",
  rating: 4.4,
  no_of_rating: 1200,
  original_price: 410,
  final_price: 405,
  hasFastDelivery: false,
  hasCashOnDelivery: true,
  isInStock: true,
  description: "Good imunity booster, drink daily "
}
];

module.exports = {products}