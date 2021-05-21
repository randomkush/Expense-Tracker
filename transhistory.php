<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>FinanceX- OnlineMoneyManagement</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <link href="/13-14" rel="icon">
    <link href="/13-14" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="/20" rel="stylesheet">
    <link href="/21" rel="stylesheet">
    <link href="/22" rel="stylesheet">
    <link href="/23" rel="stylesheet">
    <link href="/24" rel="stylesheet">
    <link href="/25" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="/28" rel="stylesheet">

    

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">

    <style>
        #tbl {
            margin: auto;
            position: absolute;
            margin-top: 50%;
            justify-content: center;
            margin-left: 0%;
        }
    </style>
</head>

<body>
    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

            <h1 class="logo"><a href="/home">FINANCEX</a></h1>
           
            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link scrollto active" href="/home">Home</a></li>
                    <li><a class="nav-link scrollto" href="/home">About</a></li>

                    <li><a class="nav-link scrollto" href="#Total">Total</a></li>
                    <li><a class="nav-link scrollto" href="#income">Income</a></li>
                    <li><a class="nav-link scrollto" href="#expense">Expense</a></li>
                    <li><a class="nav-link scrollto" href="/home">Contact</a></li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item active" href="/transactionHistory">Transaction history</a></li>
                            <li><a class="dropdown-item" href="/statistics">Statistics</a></li>
                            <li><a class="dropdown-item" href="/savings">Savings</a></li>
                            <li><a class="dropdown-item" href="/investments">Investment Options</a></li>
                        </ul>
                    </div>

                    <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->
        </div>
    </header>


    <table class="table table-striped table-sm"  id="myTableData" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Comments</th>
                            <th>MoT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $conn=  mysqli_connect("localhost","root","password","dummy");
                        if ($conn-> connect_error){
                            die("Connection Failed:".$conn->connect_error);
                        }
                        $sql = "SELECT  Trans,amount,cat,comments,MoT from login";
                        $result = $conn-> query($sql);
                        if($result-> num_rows>0){
                            while(($row=$result-> fetch_assoc())){
                                echo "<tr><td>".$row["Trans"]."<tr><td>".$row["amount"]."<tr><td>".$row["cat"]."<tr><td>".$row["comments"]."<tr><td>".$row["MoT"];
                            }
                            echo "</table>";

                        }
                        else{
                            echo "0 result";
                        }
                        $conn-> close();
                        ?>
                       
                    </tbody>
    </table>

    <div class="fixed-bottom " style="margin-left: 93%; margin-bottom: 2%;">
        <!-- <button type="button" class="btn btn-primary" style="border-radius: 50%; width: 70px; height: 70px;">+</button> -->
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal"
            style="border-radius: 50%; width: 70px; height: 70px;">+</button>

    </div>

    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Add Transaction</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body" style="margin-right: 2.5em;">
                    <form action="controllers/expense-controller" method="POST">
                        <!-- Page-1 -->
                        <div class="tab">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="date">Date</label>
                                    <input type="text" class="form-control" id="date" placeholder="Date" name="date" required>
                                </div>
                                <script>
                                    var dt = new Date();
                                    document.getElementById("date").value = dt.toLocaleDateString();
                                </script>
                                <div class="form-group col-md-6">
                                    <label for="time">Time</label>
                                    <input type="text" class="form-control" id="time" placeholder="Time" name="time" required>
                                    <script>
                                        var dt = new Date();
                                        document.getElementById("time").value = dt.toLocaleTimeString();
                                    </script>
                                </div>
                            </div>

                        </div>

                       
                        <!-- Page-2 -->
                        <div class="tab">
                            <div class="form-group">
                                <label for="expense">Amount</label>
                                <input type="number" class="form-control" id="expense" name="expense" required>
                            </div>
                            

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="MoT">Mode of Transaction</label>
                                    <select id="MoT" class="form-control" name="MoT" required>
                                        <option disabled selected>Choose...</option>
                                        <option value="PayTM">PayTM</option>
                                        <option value="Debit Card">Debit Card</option>
                                        <option value="Net Banking">Net Banking</option>
                                        <option value="GPay">GPay</option>
                                        <option value="PhonePe">PhonePe</option>
                                        <option value="BHIM">BHIM</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Others">Others</option>
                                        <option id="addCat" value="Add Category" disabled>Add Category</option>
                                    </select>
                                </div>
                                

                                <div class="form-group col-md-6">
                                    <label for="cat">Category</label>
                                    <select id="cat" class="form-control" name="cat" required>
                                        <option disabled selected>Choose...</option>
                                        <option value="PayTM">Food</option>
                                        <option value="GPay">Health</option>
                                        <option value="PhonePe">Essentials</option>
                                        <option value="BHIM">Transportation</option>
                                        <option value="Education">Education</option>
                                        <option value="Household">Household</option>
                                        <option value="Others">Others</option>
                                        <option id="addCat" value="Add Category" disabled>Add Category</option>
                                    </select>
                                    
                                </div>
                            </div>
                           
                            <div class="form-group">
                                <label for="comment">Comments</label>
                                <input type="text" class="form-control" style="height: 70px;" id="comment" placeholder="Type Here" name="comment">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button style="margin-right: -2.5em;" type="submit" class="btn btn-danger" onclick="handleApiResponse()">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div id="dvTable" style="margin-top: 10em;"></div>

<script>
    function GenerateTable() {
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Customer Id", "Name", "Country"]);
        customers.push([1, "John Hammond", "United      States"]);
        customers.push([2, "Mudassar Khan", "India"]);
        customers.push([3, "Suzanne Mathews", "France"]);
        customers.push([4, "Robert Schidner", "Russia"]);

        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
        var columnCount = customers[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }

    function handleApiResponse() {
    //$.ajax({
    //                type: "GET",               
    //                url: URL,               
    //                dataType: "jsonp",
    //                error: function (response) {           
    //                        alert('Error: There was a problem //processing your request, please refresh the browser and //try again');
    //                },
    //                success: function (response) {
    //                GenerateTable(response)
    //               }
    //        });
    GenerateTable()
    }
 
</script>
    

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg></a>
    <div id="preloader"></div>

    <!-- <script>
        function addRow() {

            var transaction = document.getElementById("date");
            var amount = document.getElementById("expense");
            var category = document.getElementById("cat");
            var comments = document.getElementById("comment");
            var MoT= document.getElementById("MoT");
            var table = document.getElementById("myTableData");

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

            row.insertCell(0).innerHTML = rowCount.value;
            row.insertCell(1).innerHTML = transaction.value;
            row.insertCell(2).innerHTML = amount.value;
            row.insertCell(3).innerHTML = category.value;
            row.insertCell(4).innerHTML = comments.value;
            row.insertCell(5).innerHTML = MoT.value;

        }

    </script> -->

    <!-- Vendor JS Files -->
    <script src="/388"></script>
    <script src="/389"></script>
    <script src="/390"></script>
    <script src="/391"></script>
    <script src="/392"></script>
    <script src="/393"></script>

    <!-- Template Main JS File -->
    <script src="/396"></script>

</body>

</html>