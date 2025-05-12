document.addEventListener('DOMContentLoaded', function () {
    const data = [{ Particulars: 'Upi Payment', Debit: 2000, Credit: '' },
    { Particulars: 'Electric Payment', Debit: 2019, Credit: '' },
    { Particulars: 'Market', Debit: 500, Credit: '' },
    { Particulars: 'Gift', Debit: '', Credit: 500 },

    ];

    const tbody = document.getElementById('t-body');

    data.forEach(particular => {
        const row = document.createElement('tr');
        row.style.fontSize = '25px';

        const pCell = document.createElement('td');
        pCell.textContent = particular.Particulars;
        row.appendChild(pCell);

        const dCell = document.createElement('td');
        dCell.textContent = particular.Debit;
        row.appendChild(dCell);

        const cCell = document.createElement('td');
        cCell.textContent = particular.Credit;
        row.appendChild(cCell);

        tbody.appendChild(row);
    });

    let total = document.createElement('tr');

    let totalValueD = document.createElement('td');
    totalValueD.textContent = 'Total';
    totalValueD.style.fontWeight = 'bolder';
    totalValueD.style.fontSize = '30px';
    total.appendChild(totalValueD);
    let totalVD = document.createElement('td');
    totalVD.id = 'tVD';
    totalVD.style.fontSize = '25px';
    totalVD.style.fontWeight = 'bolder';
    total.appendChild(totalVD);

    let totalValueC = document.createElement('td');
    totalValueC.id = 'tVC';
    totalValueC.style.fontSize = '25px';
    totalValueC.style.fontWeight = 'bolder';
    total.appendChild(totalValueC);



    tbody.after(total);


});


document.addEventListener('DOMContentLoaded', function () {
    function calculateTotal() {
        const table = document.getElementById('data-table');
        let total = 0;

        // Loop through the table rows (ignoring the header)
        for (let i = 1; i < table.rows.length; i++) {
            // Get the price cell (second cell in each row)
            const debit = parseFloat(table.rows[i].cells[1].innerText);
            

            // Add the price to the total

            if (!isNaN(debit))
                total += debit;
        }

        // Display the total in the paragraph
        document.getElementById('tVD').innerText = total;
    }
   

    calculateTotal();


})
document.addEventListener('DOMContentLoaded', function () {
    function calculateTotal() {
        const table = document.getElementById('data-table');
        let total = 0;

        // Loop through the table rows (ignoring the header)
        for (let i = 1; i < table.rows.length; i++) {
            // Get the price cell (second cell in each row)
            const credit = parseFloat(table.rows[i].cells[2].innerText);
            

            // Add the price to the total

            if (!isNaN(credit))
                total += credit;
        }

        // Display the total in the paragraph
        document.getElementById('tVC').innerText = total;
    }
   

    calculateTotal();


});
 

 





