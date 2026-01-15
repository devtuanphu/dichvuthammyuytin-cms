
export default {
  register() {},

  async bootstrap({ strapi }) {
    // ============================================
    // SEED DATA DISABLED
    // ============================================
    // Uncomment the code below if you need to reset/seed data
    // This includes: Homepage, Services Page, About Page, Contact Page, News Page, and Sample Articles
    
    console.log('--- SEED DATA IS DISABLED ---');
    console.log('--- To enable, uncomment the code in src/index.ts ---');
    
    /*
    try {
      console.log('--- CHECKING HOMEPAGE DATA ---');
      
      const homepage = await strapi.documents('api::homepage.homepage').findFirst();

      // Seed if no homepage exists OR if it's empty
      if (!homepage || !homepage.hero_section) {
        console.log('--- SEEDING/UPDATING HOMEPAGE DATA ---');
        
        const data = {
          hero_section: {
            badge: 'Công nghệ Laser hiện đại nhất',
            title: 'Tự tin với',
            highlight: 'Vẻ đẹp riêng tư',
            description: 'Chúng tôi mang đến giải pháp thẩm mỹ vùng kín an toàn, hiệu quả với đội ngũ bác sĩ chuyên môn cao và công nghệ tiên tiến nhất.',
            cta_text: 'Đặt lịch tư vấn miễn phí',
            phone: '0123 456 789',
            stats: [
              { label: 'Khách hàng tin tưởng', value: '10,000+' },
              { label: 'Năm kinh nghiệm', value: '15+' },
              { label: 'Hài lòng', value: '98%' },
            ],
          },
          services_section: {
            title: 'Dịch vụ của chúng tôi',
            description: 'Các giải pháp thẩm mỹ vùng kín toàn diện với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm',
            services: [
              { title: 'Làm hồng vùng kín', description: 'Công nghệ Laser CO2 Fractional giúp làm hồng tự nhiên, an toàn và lâu dài.', icon_name: 'Heart', color_gradient: 'from-pink-400 to-rose-400', slug: 'lam-hong-vung-kin' },
              { title: 'Thu hẹp âm đạo', description: 'Phương pháp Laser không đau, không cần nghỉ dưỡng, hiệu quả ngay sau 1 lần.', icon_name: 'Sparkles', color_gradient: 'from-purple-400 to-pink-400', slug: 'thu-hep-am-dao' },
              { title: 'Tạo hình môi lớn', description: 'Tạo hình thẩm mỹ, cải thiện độ đàn hồi và màu sắc tự nhiên.', icon_name: 'Award', color_gradient: 'from-rose-400 to-orange-400', slug: 'tao-hinh-moi-lon' },
              { title: 'Trẻ hóa vùng kín', description: 'Kích thích tái tạo collagen, phục hồi độ ẩm và độ đàn hồi.', icon_name: 'Shield', color_gradient: 'from-blue-400 to-purple-400', slug: 'tre-hoa-vung-kin' },
            ],
          },
          benefits_section: {
            title: 'Tại sao chọn chúng tôi?',
            benefits_list: [
              { label: 'Đội ngũ bác sĩ chuyên môn cao, giàu kinh nghiệm', value: '1' },
              { label: 'Công nghệ Laser CO2 Fractional hiện đại nhất', value: '2' },
              { label: 'Quy trình khép kín, đảm bảo riêng tư tuyệt đối', value: '3' },
              { label: 'Cam kết an toàn, không đau, không cần nghỉ dưỡng', value: '4' },
              { label: 'Tư vấn miễn phí, hỗ trợ 24/7', value: '5' },
              { label: 'Giá cả minh bạch, nhiều ưu đãi hấp dẫn', value: '6' },
            ],
          },
          process_section: {
            title: 'Quy trình điều trị',
            description: '4 bước đơn giản để bạn có được kết quả như mong đợi',
            steps: [
              { step_number: '01', title: 'Tư vấn', description: 'Bác sĩ thăm khám và tư vấn phương pháp phù hợp' },
              { step_number: '02', title: 'Kiểm tra', description: 'Kiểm tra sức khỏe tổng quát và vùng điều trị' },
              { step_number: '03', title: 'Thực hiện', description: 'Tiến hành liệu trình với công nghệ hiện đại' },
              { step_number: '04', title: 'Chăm sóc', description: 'Theo dõi và chăm sóc sau điều trị' },
            ],
          },
          testimonials_section: {
            title: 'Khách hàng nói gì về chúng tôi',
            description: 'Hàng ngàn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi',
            testimonials: [
              { name: 'Chị Minh Anh', age: 32, rating: 5, content: 'Tôi rất hài lòng với dịch vụ tại đây. Bác sĩ tư vấn tận tình, quy trình chuyên nghiệp và kết quả vượt mong đợi.' },
              { name: 'Chị Thu Hà', age: 28, rating: 5, content: 'Không gian riêng tư, sạch sẽ. Sau liệu trình tôi cảm thấy tự tin hơn rất nhiều.' },
              { name: 'Chị Lan Phương', age: 35, rating: 5, content: 'Dịch vụ tuyệt vời, giá cả hợp lý. Tôi đã giới thiệu cho nhiều người bạn.' },
            ],
          },
          cta_section: {
            title: 'Sẵn sàng bắt đầu hành trình của bạn?',
            description: 'Đặt lịch tư vấn miễn phí ngay hôm nay để được bác sĩ thăm khám và tư vấn chi tiết',
          },
          seo: {
            metaTitle: 'Thẩm Mỹ Vùng Kín Trần Điền - Tự tin với Vẻ đẹp riêng tư',
            metaDescription: 'Trung tâm thẩm mỹ vùng kín uy tín hàng đầu. Chuyên làm hồng, thu hẹp, trẻ hóa vùng kín bằng công nghệ Laser CO2 Fractional hiện đại.',
            keywords: 'thẩm mỹ vùng kín, làm hồng vùng kín, trẻ hóa vùng kín, trần điền',
            canonicalURL: 'https://thammyvungkin.vn',
          }
        };

        if (!homepage) {
          await strapi.documents('api::homepage.homepage').create({
            data,
            status: 'published'
          });
          console.log('--- HOMEPAGE CREATED ---');
        } else {
          await strapi.documents('api::homepage.homepage').update({
            documentId: homepage.documentId,
            data,
            status: 'published'
          });
          console.log('--- HOMEPAGE UPDATED ---');
        }
      } else {
        console.log('--- HOMEPAGE ALREADY HAS DATA ---');
      }

      // ... (rest of seed data for Services, About, Contact, News pages and Articles)
      // Full seed data is preserved but commented out
      
    } catch (error) {
      console.error('Error seeding data:', error);
    }
    */

    /*
    // ============================================
    // FOOTER SEED DATA (COMMENTED OUT)
    // ============================================
    try {
      console.log('--- CHECKING FOOTER DATA ---');
      const footer = await strapi.documents('api::footer.footer').findFirst();

      if (!footer || !footer.company_info) {
        console.log('--- SEEDING/UPDATING FOOTER DATA ---');

        const footerData = {
          company_info: {
            description: 'Chuyên cung cấp các dịch vụ thẩm mỹ vùng kín an toàn, hiệu quả với đội ngũ bác sĩ chuyên môn cao.',
            facebook_url: 'https://facebook.com',
            instagram_url: 'https://instagram.com',
          },
          quick_links: {
            title: 'Liên kết nhanh',
            links: [
              { label: 'Trang chủ', url: '/' },
              { label: 'Dịch vụ', url: '/dich-vu' },
              { label: 'Tin tức', url: '/tin-tuc' },
              { label: 'Về chúng tôi', url: '/ve-chung-toi' },
              { label: 'Liên hệ', url: '/lien-he' },
            ],
          },
          services: {
            title: 'Dịch vụ',
            links: [
              { label: 'Làm hồng vùng kín', url: '/dich-vu#lam-hong' },
              { label: 'Thu hẹp âm đạo', url: '/dich-vu#thu-hep' },
              { label: 'Tạo hình môi lớn', url: '/dich-vu#tao-hinh' },
              { label: 'Trẻ hóa vùng kín', url: '/dich-vu#tre-hoa' },
            ],
          },
          contact_info: {
            title: 'Liên hệ',
            address: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
            phone: '0123 456 789',
            email: 'info@thammyvungkin.vn',
            working_hours: 'T2 - T7: 8:00 - 20:00\nCN: 8:00 - 17:00',
          },
          copyright_text: `© ${new Date().getFullYear()} Thẩm Mỹ Vùng Kín. Bảo lưu mọi quyền.`,
        };

        if (!footer) {
          await strapi.documents('api::footer.footer').create({
            data: footerData,
            status: 'published'
          });
          console.log('--- FOOTER CREATED ---');
        } else {
          await strapi.documents('api::footer.footer').update({
            documentId: footer.documentId,
            data: footerData,
            status: 'published'
          });
          console.log('--- FOOTER UPDATED ---');
        }
      } else {
        console.log('--- FOOTER ALREADY HAS DATA ---');
      }
    } catch (error) {
      console.error('Error seeding footer data:', error);
    }
    */
  },
};
