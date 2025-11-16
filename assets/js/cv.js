document.addEventListener('DOMContentLoaded', () => {

            // --- DATA NGÔN NGỮ ---
            const langData = {
                'vi': {
                    'intro': "Tôi là một sinh viên năm tư ngành Sư phạm tin học, nhiệt tình tâm huyết trong công việc, có kinh nghiệm nhiều về giảng dạy và lập trình cơ bản và nâng cao. Tôi tự tin có thể làm tốt công việc của mình.",
                    'contact_title': "Thông tin liên hệ",
                    'gpa_title': "Kết quả học tập",
                    'main_major': "Sư phạm Tin học & Nghiên cứu Khoa học",
                    'skills_title': "Kỹ năng chuyên môn",
                    'skill_1': "Giảng dạy & Quản lý lớp học",
                    'skill_2': "Thuật toán & Cấu trúc dữ liệu",
                    'skill_3': "Thiết kế Chatbot (Ontology, Knowledge-based)",
                    'skill_4': "Lập trình: C++, Python, Web Dev, Scratch",
                    'skill_5': "Giao tiếp Tiếng Anh (Học thuật & Kỹ thuật)",
                    'cert_title': "Chứng chỉ",
                    'cert_1': "Bằng Tiếng Anh B1",
                    'edu_title': "Học Vấn",
                    'edu_school': "Đại học Sư phạm Thành phố Hồ Chí Minh",
                    'edu_major': "Sư phạm Tin học",
                    'edu_year': "Sinh viên năm 4 (2021 - Hiện tại)",
                    'exp_title': "Kinh Nghiệm & Dự Án",
                    'exp_1_date': "2022 - Hiện tại",
                    'exp_1_li_1': "Giảng dạy lập trình C++ nâng cao, thiết kế thuật toán.",
                    'exp_1_li_2': "Dạy kỹ năng phát triển web (Frontend & Backend).",
                    'exp_1_li_3': "Hướng dẫn Scratch, Python và lập trình cơ bản cho học sinh (6-18 tuổi).",
                    'exp_2_title': "Dự án Nghiên cứu Khoa học",
                    'exp_2_li_1': "Thiết kế Chatbot dựa trên tri thức (Knowledge-Based) cho môn Cơ sở dữ liệu.",
                    'exp_2_li_2': "Nâng cao hiệu quả truy vấn kiến thức pháp lý bằng Knowledge Graphs và Reasoning.",
                    'gproj_title': "Dự án nhóm",
                    'gproj_1_title': "Hệ thống Chatbot truy vấn kiến thức môn Cơ sở dữ liệu",
                    'gproj_1_stack': "Sử dụng: Python, Knowledge Graph, Neo4j.",
                    'gproj_2_title': "Hệ thống Chatbot truy vấn luật Giao thông đường bộ",
                    'gproj_2_stack': "Sử dụng: Python, Knowledge Graph, Neo4j.",
                    'gproj_3_title': "Trang web điểm danh sinh viên bằng Face ID",
                    'gproj_3_stack': "Sử dụng: ASP.NET Core MVC, Razor Page, SQL Server, DeepFace.",
                    'pub_title': "Bài Báo Khoa Học",
                    'pub_1_desc': "Mô tả: Giới thiệu mô hình kết hợp ontology, toán tử và knowledge graphs để biểu diễn tri thức, áp dụng xây dựng chatbot cho môn học Database.",
                    'pub_2_desc': "Mô tả: Trình bày framework chatbot giáo dục dựa trên knowledge base (ontology). So sánh hiệu suất với các công cụ AI tạo sinh hiện có.",
                    'pub_3_desc': "Mô tả: Đề xuất hệ thống truy vấn pháp lý hybrid, tích hợp knowledge graphs, RAG và LLMs để cải thiện độ chính xác và tốc độ xử lý.",
                    'awards_title': "Giải Thưởng",
                    'award_1': "Giải Nhì, Nghiên cứu khoa học sinh viên, Khoa CNTT",
                    'award_2': "Giải Nhì, Nghiên cứu khoa học sinh viên, Khoa CNTT",
                    'award_3': "Giải Khuyến khích, cuộc thi 'Tin học trẻ'",
                    'award_4': "Giải Ba, Thi Tin học trẻ cấp Tỉnh, Đồng Tháp"
                },
                'en': {
                    'intro': "I am a fourth-year student in Computer Science Education, enthusiastic and dedicated to my work, with extensive experience in teaching and programming (basic and advanced). I am confident I can perform my job well.",
                    'contact_title': "Contact Me",
                    'main_major': "Computer Science Teacher & Researcher",
                    'gpa_title': "Academic Performance",
                    'skills_title': "Pro Skills",
                    'skill_1': "Teaching & Classroom Management",
                    'skill_2': "Algorithm & Data Structures",
                    'skill_3': "Chatbot Design (Ontology, Knowledge-based)",
                    'skill_4': "Programming: C++, Python, Web Dev, Scratch",
                    'skill_5': "English Communication (Academic & Technical)",
                    'cert_title': "Certificates",
                    'cert_1': "B1 Level English Certificate",
                    'edu_title': "Education",
                    'edu_school': "Ho Chi Minh City University of Education",
                    'edu_major': "Computer Science Teacher Education",
                    'edu_year': "4th-year student (2021 - Present)",
                    'exp_title': "Experience & Projects",
                    'exp_1_date': "2022 - Present",
                    'exp_1_li_1': "Delivered courses in advanced C++ programming, algorithm design.",
                    'exp_1_li_2': "Taught web development skills (Frontend & Backend).",
                    'exp_1_li_3': "Provided instruction in Scratch, Python, and foundational programming to students (aged 6-18).",
                    'exp_2_title': "Research Projects in Computer Science",
                    'exp_2_li_1': "Designing a Knowledge-Based Chatbot for Querying Database Fundamentals.",
                    'exp_2_li_2': "Enhancing Legal Knowledge Query Efficiency Using Knowledge Graphs and Reasoning.",
                    'gproj_title': "Group Projects",
                    'gproj_1_title': "Knowledge-Based Chatbot System for Database Fundamentals",
                    'gproj_1_stack': "Using: Python, Knowledge Graph, Neo4j.",
                    'gproj_2_title': "Chatbot System for Querying Road Traffic Laws",
                    'gproj_2_stack': "Using: Python, Knowledge Graph, Neo4j.",
                    'gproj_3_title': "Student Attendance Website using Face ID",
                    'gproj_3_stack': "Using: ASP.NET Core MVC, Razor Page, SQL Server, DeepFace.",
                    'pub_title': "Publications",
                    'pub_1_desc': "Description: Introduces a combined model of ontology, operators, and knowledge graphs for representing domain knowledge in education, applied to build a chatbot for the Database course.",
                    'pub_2_desc': "Description: Presents an educational chatbot framework built upon an ontology-driven knowledge base. Compares its performance with modern large language models.",
                    'pub_3_desc': "Description: Proposes a hybrid legal query system that integrates knowledge graphs, retrieval-augmented generation (RAG), and LLMs to improve accuracy and processing speed.",
                    'awards_title': "Awards",
                    'award_1': "Second Prize, Student Scientific Research Award, Faculty of IT",
                    'award_2': "Second Prize, Student Scientific Research Award, Faculty of IT",
                    'award_3': "Encouragement Prize, 'Youth Informatics' Contest",
                    'award_4': "Third Prize, High School Informatics Contest, Dong Thap Province"
                }
            };

            // --- LOGIC CHUYỂN NGÔN NGỮ ---
            const langButtons = document.querySelectorAll('.lang-button');
            const htmlEl = document.documentElement;

            function updateLanguage(lang) {
                if (!langData[lang]) return;

                // Cập nhật thuộc tính 'lang' của thẻ <html>
                htmlEl.setAttribute('lang', lang);

                // Lưu vào localStorage
                localStorage.setItem('language', lang);

                // Cập nhật trạng thái active cho nút
                langButtons.forEach(btn => {
                    if (btn.dataset.lang === lang) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });

                // Tìm và cập nhật tất cả văn bản
                const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
                elementsToTranslate.forEach(el => {
                    const key = el.dataset.langKey;
                    if (langData[lang][key]) {
                        el.innerHTML = langData[lang][key];
                    }
                });
            }

            // Thêm sự kiện click cho các nút
            langButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    updateLanguage(btn.dataset.lang);
                });
            });

            // 1. Kiểm tra ngôn ngữ đã lưu khi tải trang
            const savedLang = localStorage.getItem('language') || 'vi'; // Mặc định là 'vi'
            updateLanguage(savedLang);


            // --- HIỆU ỨNG GÕ CHỮ ---
            const nameEl = document.getElementById('name-type');
            const titleEl = document.getElementById('title-type');
            
            const nameText = "Lê Thị Ngọc Thảo";
            const titleText = "Sư phạm Tin học & Nghiên cứu Khoa học";
            
            let nameIndex = 0;
            let titleIndex = 0;

            function typeWriter(element, text, index, callback) {
                if (index < text.length) {
                    element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
                    index++;
                    setTimeout(() => typeWriter(element, text, index, callback), 100);
                } else {
                    element.innerHTML = text;
                    if (callback) {
                        callback();
                    }
                }
            }
            
            typeWriter(nameEl, nameText, nameIndex, () => {
                setTimeout(() => {
                    titleEl.style.opacity = 1;
                    typeWriter(titleEl, titleText, titleIndex);
                }, 300);
            });
            titleEl.style.opacity = 0;

            
            // --- HIỆU ỨNG FADE-IN KHI CUỘN ---
            const sections = document.querySelectorAll('.fade-in-section');
            
            if ("IntersectionObserver" in window) {
                const sectionObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    root: null,
                    threshold: 0.15,
                    rootMargin: "0px"
                });

                sections.forEach(section => {
                    sectionObserver.observe(section);
                });
            } else {
                sections.forEach(section => {
                    section.classList.add('is-visible');
                });
            }
        });