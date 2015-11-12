##To install:
```
npm install -g gulp
npm install
```

##To run:
```
gulp
```

##Use:
```
Give the container .flex-container and optional classes [rows | cols | gutter-5 | gutter-10 | gutter-20 | gutter-custom] - if custom gutter, give data attribute specifying gutter size: [data-gutter="50"]

Children are sections

section children are .box

Example - two rows with a gutter of 20:

.flex-container.rows.gutter-20
  section
    .box*3
  section
    .box*5

Example - two rows with a custom gutter of 50:

.flex-container.rows.gutter-custom data-gutter="50"
  section
    .box*3
  section
    .box*5

```
