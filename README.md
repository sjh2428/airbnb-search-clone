# 멤버십 프로젝트 - 에어비엔비 저장소

### dotenv

```
COOKIE_SECRET=

JWT_KEY=

NODE_ENV=development

DB_DEV_USERNAME=
DB_DEV_PW=
DB_DEV_SCHEMA=
DB_DEV_HOST=
```

#### DB

**tbl_hosts**

---

| ﻿Column Name       | Type    | Options              |
| ------------------ | ------- | -------------------- |
| host_id            | int     | PRIMARY KEY NOT NULL |
| host_name          | varchar | NOT NULL             |
| host_location      | varchar | NOT NULL             |
| host_url           | varchar | NOT NULL             |
| host_thumbnail_url | varchar | NOT NULL             |
| host_picture_url   | varchar | NOT NULL             |
| superhost          | boolean | NOT NULL             |

**tbl_rooms**

---

| ﻿Column Name           | Type    | Options                                           |
| ---------------------- | ------- | ------------------------------------------------- |
| room_id                | int     | PRIMARY KEY NOT NULL                              |
| room_url               | varchar | NOT NULL                                          |
| room_name              | varchar | NOT NULL                                          |
| room_summary           | text    | NOT NULL                                          |
| host_id                | int     | FOREIGN KEY REFERENCES tbl_hosts host_id NOT NULL |
| room_picture_url       | varchar | NOT NULL                                          |
| city                   | varchar | NOT NULL                                          |
| state                  | varchar | NOT NULL                                          |
| country                | varchar | NOT NULL                                          |
| property_type          | varchar | NOT NULL                                          |
| room_type              | varchar | NOT NULL                                          |
| accommodates           | int     | NOT NULL                                          |
| bathrooms              | int     | NOT NULL                                          |
| bedrooms               | int     | NOT NULL                                          |
| beds                   | int     | NOT NULL                                          |
| bed_type               | int     | NOT NULL                                          |
| amenities              | varchar | NOT NULL                                          |
| price                  | int     | NOT NULL                                          |
| weekly_price           | int     | NOT NULL                                          |
| monthly_price          | int     | NOT NULL                                          |
| price_per_extra_people | int     | NOT NULL                                          |
| reviewers              | int     | NOT NULL                                          |
| reviews_score          | int     | NOT NULL                                          |

**tbl_users**

---

| ﻿Column_Name  | Type    | Options              |
| ------------- | ------- | -------------------- |
| user_id       | varchar | PRIMARY KEY NOT NULL |
| user_name     | varchar | NOT NULL             |
| user_password | varchar | NOT NULL             |
| host_name     | varchar | NOT NULL             |

**tbl_reservations**

---

| ﻿Column Name   | Type | Options                                           |
| -------------- | ---- | ------------------------------------------------- |
| reservation_id | int  | PRIMARY KEY AUTO_INCREMENT NOT NULL               |
| user_id        | int  | FOREIGN KEY REFERENCES tbl_users user_id NOT NULL |
| room_id        | int  | FOREIGN KEY REFERENCES tbl_rooms room_id NOT NULL |
| guests         | int  | NOT NULL                                          |
| price          | int  | NOT NULL                                          |
| start_date     | date | NOT NULL                                          |
| end_date       | date | NOT NULL                                          |
