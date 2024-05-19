const Filterer = () => {
  return (
    <>
         <div className="text-pretty mb-2">Category</div>
        <div className="list-group list-group-transparent mb-3">
          <a
            className="list-group-item list-group-item-action d-flex align-items-center active"
            href="#"
          >
            Games
            <small className="text-secondary ms-auto">24</small>
          </a>
          <a
            className="list-group-item list-group-item-action d-flex align-items-center"
            href="#"
          >
            Clothing
            <small className="text-secondary ms-auto">149</small>
          </a>
          <a
            className="list-group-item list-group-item-action d-flex align-items-center"
            href="#"
          >
            Jewelery
            <small className="text-secondary ms-auto">88</small>
          </a>
          <a
            className="list-group-item list-group-item-action d-flex align-items-center"
            href="#"
          >
            Toys
            <small className="text-secondary ms-auto">54</small>
          </a>
        </div>
        <div className="subheader mb-2">Rating</div>
        <div className="mb-3">
          <label className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="form-stars"
              value="5 stars"
              checked=""
            />
            <span className="form-check-label">5 stars</span>
          </label>
          <label className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="form-stars"
              value="4 stars"
            />
            <span className="form-check-label">4 stars</span>
          </label>
          <label className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="form-stars"
              value="3 stars"
            />
            <span className="form-check-label">3 stars</span>
          </label>
          <label className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="form-stars"
              value="2 and less stars"
            />
            <span className="form-check-label">2 and less stars</span>
          </label>
        </div>
        <div className="subheader mb-2">Tags</div>
        <div className="mb-3">
          <label className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="form-tags[]"
              value="business"
              checked=""
            />
            <span className="form-check-label">business</span>
          </label>
          <label className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="form-tags[]"
              value="evening"
            />
            <span className="form-check-label">evening</span>
          </label>
          <label className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="form-tags[]"
              value="leisure"
            />
            <span className="form-check-label">leisure</span>
          </label>
          <label className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="form-tags[]"
              value="party"
            />
            <span className="form-check-label">party</span>
          </label>
        </div>
        <div className="subheader mb-2">Price</div>
        <div className="row g-2 align-items-center mb-3">
          <div className="col">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                placeholder="from"
                value="3"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-auto">—</div>
          <div className="col">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                placeholder="to"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="subheader mb-2">Shipping</div>
        <div>
          <select name="" className="form-select">
            <option>United Kingdom</option>
            <option>USA</option>
            <option>Germany</option>
            <option>Poland</option>
            <option>Other…</option>
          </select>
        </div>
        <div className="mt-5">
          <button className="btn btn-primary w-100">Confirm changes</button>
          <a href="#" className="btn btn-link w-100">
            Reset to defaults
          </a>
        </div>
     </>
  );
};

export default Filterer;
