import React from 'react';
import styles from 'styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introduce}>
        <p id={styles.contentSeo}>
          Thời gian gần đây, thị trường bất động sản Toàn quốc đang có những
          bước tiến mạnh mẽ với sự ra đời của hàng loạt dự án mới. Các dự án bất
          động sản này có loại hình rất đa dạng, phục vụ cho nhu cầu của nhiều
          đối tượng khách hàng khác nhau, từ{' '}
          <a href="https://nha.chotot.com/toan-quoc/mua-ban-can-ho-chung-cu">
            căn hộ
          </a>
          , chung cư đến
          <a href="https://nha.chotot.com/toan-quoc/mua-ban-nha-dat">
            biệt thự, nhà phố{' '}
          </a>
          và cả <a>shophouse</a>, officetel. Việc tìm cho mình một{' '}
          <a>dự án mới</a> thích hợp để đầu tư là chuyện không hề đơn giản khi
          bạn phải cân nhắc hàng loạt yếu tố như: vị trí thế nào, giá cả ra sao,
          chủ đầu tư và đơn vị thi công có uy tín hay không,... Nếu bạn còn phân
          vân chưa biết phải lựa chọn thế nào thì hãy để{' '}
          <a href="https://nha.chotot.com/">Chợ Tốt Nhà</a> giúp bạn nhé. Hàng
          trăm mẩu tin đăng bán bất động sản và dự án mới trên Chợ Tốt mỗi ngày
          cùng với những thông tin chi tiết về vị trí, giá cả, chủ đầu tư cũng
          như đơn vị thi công sẽ giúp bạn nhanh chóng tìm được dự án thích hợp
          với mình một cách dễ dàng nhất. Hãy để Chợ Tốt đồng hành cùng bạn nhé,
          vừa không mất nhiều công sức, vừa tiết kiệm thời gian
        </p>
        <p>
          Bên cạnh đó, bạn nên lưu ý một số điểm sau để việc tìm kiếm đạt được
          hiệu quả cao hơn nhé:
        </p>
        <ul>
          <li>
            ✓ Kiểm tra các tranh chấp hay giấy tờ nhà kỹ lưỡng trước khi quyết
            định mua, không mua bán, sang tên với các dự án không rõ giấy tờ hay
            giấy tờ không hợp lệ và có tình trạng tranh chấp, vướng mắc về mặt
            pháp lý.
          </li>
          <li>
            {' '}
            ✓ Tìm hiểu về thương hiệu, uy tín và sự chuyên nghiệp của Chủ đầu
            tư.
          </li>{' '}
          <li>
            ✓ Tìm hiểu rõ về thời gian bàn giao dự án và các khoản lãi phạt khi
            chậm giao dự án.
          </li>{' '}
          <li>
            ✓ Xem xét về những quyền lợi sau khi mua dự án, các điều khoản về
            nghĩa vụ thuế hay hồ sơ, giấy tờ chứng nhận sở hữu.
          </li>{' '}
          <li>
            ✓ Đọc kỹ hợp đồng chuyển nhượng dự án căn hộ, chung cư trước khi ký.
          </li>{' '}
          <li>
            ✓ Không chuyển khoản, đặt cọc hay trả góp với người mua là cá nhân
            hoặc công ty không đáng tin cậy. vời khi mua bán trên Chợ Tốt.
          </li>
        </ul>
        <p>Chúc bạn có những trải nghiệm tuyệt</p>
        <p>Chợ Tốt - Muốn là có.</p>
      </div>
      <p id={styles.seeMore}>Thu gọn</p>
    </div>
  );
};

export default Footer;
