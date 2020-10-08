import React, { Component } from 'react';

class FormDangKy extends Component {
    render() {
        return (
            <div className="FormDangKy">
                <h2>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h2>
                <p>Công nghệ đang thay đổi nhanh chóng, hãy cũng vươn ra thế giới với những bài viết chất lượng từ chúng tôi.</p>
                <div className="TaiKhoan">
                    <input placeholder="TÊN CỦA BẠN" />	
                </div>
                <div className="MatKhau">
                    <input placeholder="EMAIL CỦA BẠN" />	
                </div>
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>Đồng ý với điều khoản sử dụng</label>	
                </div>
                <button>ĐĂNG KÝ</button>
                <p>Bạn sẽ được thông báo khi có bài viết mới. Mình không spam vì mình cũng rất ghét :) THANK YOU</p>	
            </div>
        );
    }
}
export default FormDangKy;