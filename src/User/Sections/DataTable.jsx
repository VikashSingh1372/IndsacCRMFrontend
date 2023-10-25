import React from 'react'

const DataTable = () => {
    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
            </div>
            {/* <!-- /.card-header --> */}
            <div class="card-body">
                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <div class="row">
                        <div class="col-sm-12 col-md-8">
                            <div class="dt-buttons btn-group flex-wrap">
                                <button class="btn btn-secondary buttons-copy buttons-html5" tabindex="0" aria-controls="example1" type="button">
                                    <span>Copy</span>
                                </button>
                                <button class="btn btn-secondary buttons-csv buttons-html5" tabindex="0" aria-controls="example1" type="button">
                                    <span>CSV</span>
                                </button>
                                <button class="btn btn-secondary buttons-excel buttons-html5" tabindex="0" aria-controls="example1" type="button">
                                    <span>Excel</span>
                                </button>
                                <button class="btn btn-secondary buttons-pdf buttons-html5" tabindex="0" aria-controls="example1" type="button">
                                    <span>PDF</span>
                                </button>
                                <button class="btn btn-secondary buttons-print" tabindex="0" aria-controls="example1" type="button">
                                    <span>Print</span>
                                </button>
                                <div class="btn-group">
                                    <button class="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" tabindex="0" aria-controls="example1" type="button" aria-haspopup="true" aria-expanded="false">
                                        <span>Column visibility</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3">
                            <div id="example1_filter" class="dataTables_filter">
                                <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1" /></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <table id="example1" class="table table-bordered table-striped dataTable dtr-inline" role="grid" aria-describedby="example1_info">
                                <thead>
                                    <tr role="row">
                                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column ascending">Rendering engine</th>
                                        <th class="sorting sorting_desc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" aria-sort="descending">Browser</th>
                                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">Platform(s)</th>
                                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Engine version</th>
                                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">CSS grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd">
                                        <td class="dtr-control" tabindex="0">Gecko</td>
                                        <td class="sorting_1">Seamonkey 1.1</td>
                                        <td class="">Win 98+ / OSX.2+</td>
                                        <td class="">1.8</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="dtr-control" tabindex="0">Webkit</td>
                                        <td class="sorting_1">Safari 3.0</td>
                                        <td class="">OSX.4+</td>
                                        <td class="">522.1</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="dtr-control" tabindex="0">Webkit</td>
                                        <td class="sorting_1">Safari 2.0</td>
                                        <td class="">OSX.4+</td>
                                        <td class="">419.3</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="dtr-control" tabindex="0">Webkit</td>
                                        <td class="sorting_1">Safari 1.3</td>
                                        <td class="">OSX.3</td>
                                        <td class="">312.8</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="dtr-control" tabindex="0">Webkit</td>
                                        <td class="sorting_1">Safari 1.2</td>
                                        <td class="">OSX.3</td>
                                        <td class="">125.5</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="dtr-control" tabindex="0">Webkit</td>
                                        <td class="sorting_1">S60</td>
                                        <td class="">S60</td>
                                        <td class="">413</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="dtr-control" tabindex="0">Misc</td>
                                        <td class="sorting_1">PSP browser</td>
                                        <td class="">PSP</td>
                                        <td class="">-</td>
                                        <td>C</td>
                                    </tr>
                                    <tr class="even">
                                        <td class="dtr-control">Presto</td>
                                        <td class="sorting_1">Opera for Wii</td>
                                        <td class="">Wii</td>
                                        <td class="">-</td>
                                        <td>A</td>
                                    </tr>
                                    <tr class="odd">
                                        <td class="dtr-control">Presto</td>
                                        <td class="sorting_1">Opera 9.5</td>
                                        <td class="">Win 88+ / OSX.3+</td>
                                        <td class="">-</td>
                                        <td>A</td>
                                    </tr>


                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th rowspan="1" colspan="1">Rendering engine</th>
                                        <th rowspan="1" colspan="1">Browser</th>
                                        <th rowspan="1" colspan="1">Platform(s)</th>
                                        <th rowspan="1" colspan="1">Engine version</th>
                                        <th rowspan="1" colspan="1">CSS grade</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-5">
                            <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                        </div>
                        <div class="col-sm-12 col-md-7">
                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" id="example1_previous">
                                        <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                    </li>
                                    <li class="paginate_button page-item active">
                                        <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                    </li>
                                    {/* <!-- Add more pagination links as needed --> */}
                                    <li class="paginate_button page-item next" id="example1_next">
                                        <a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTable