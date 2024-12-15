import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { 
  BarChart2, 
  List, 
  PlusCircle 
} from 'lucide-react'

function Analytics() {
  return (
    <div className="container-fluid px-4 py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="display-6 fw-bold text-primary d-flex align-items-center">
              <BarChart2 className="me-3" size={36} /> 
              Sales Analytics
            </h1>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <nav>
                <div className="nav nav-pills nav-fill" role="tablist">
                  <Link 
                    to="showsale" 
                    className="nav-link d-flex align-items-center justify-content-center"
                  >
                    <List className="me-2" /> 
                    Show Sales
                  </Link>
                  <Link 
                    to="addsale" 
                    className="nav-link d-flex align-items-center justify-content-center"
                  >
                    <PlusCircle className="me-2" /> 
                    Add Sale
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics