function Details(id) {
    render(id);
  }
  
  function render(id) {
    if (id == "lenovoBrand") {
      let Lenovo = document.getElementById("lenovo");
      Lenovo.innerHTML =
        "<h4>Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6(39.62cm) FHD IPS Thin & Light Laptop (16GB/512GB SSD/Windows 11/MS Office 2021/Backlit Keyboard/Fingerprint Reader/Graphite Grey/1.66Kg), 82FG01H9IN</p><br><p style='text-decoration:line-through'>>M.R.P.:₹	1,01,390.00</p><br>Deal Price:	₹62,490.00<br>You Save:	₹38,900.00 <p> Inclusive of all taxes</p><br> EMI starts at ₹2,942. No Cost EMI available EMI options";
    }
    if (id == "hpBrand") {
      let Apple = document.getElementById("hp");
      Apple.innerHTML =
        "<h4>HP 14 10th Gen Intel Core i3 14 inches FHD Screen Laptop with 4G (LTE), 8GB RAM, 1TB HDD, Windows 10, MS Office, 1.46kg, 14s-er0004TU</p><br><p style='text-decoration:line-through'>M.R.P.:₹64,999.00</p><br>Deal Price:	₹46,990.00 <br><p>You Save:	₹18,009.00 (28%)Inclusive of all taxes <br>EMI starts at ₹2,212 per month. EMI options ";
    }
    if (id == "asusBrand") {
      let one_plus = document.getElementById("asus");
      one_plus.innerHTML =
        "<h4>ASUS VivoBook 14 (2021), 14-inch (35.56 cms) FHD, Intel Core i7-1065G7 10th Gen, Thin and Light Laptop (16GB/512GB SSD/Integrated Graphics/Office 2021/Windows 11/Silver/1.6 Kg), X415JA-EK701WS</h4><br><br><p style='text-decoration:line-through'>M.R.P.:₹82,990.00/p><br>Deal Price:	₹57,990.00<Br><p>You Save:	₹25,000.00 (30%)Inclusive of all taxes</p><br>EMI starts at ₹2,730. No Cost EMI available EMI options ";
    }
  }