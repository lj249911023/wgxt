(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hxcb", "chunk-d13376f8"],
  {
    "0047": function (e, t, a) {
      "use strict";
      a.r(t);
      var i,
        l = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            { staticClass: "stock-cust-ajust-container" },
            [
              a(
                "el-row",
                { staticStyle: { position: "inherit" } },
                [
                  a(
                    "el-col",
                    { attrs: { span: 24 } },
                    [
                      a(
                        "page-search",
                        [
                          a(
                            "el-form",
                            {
                              staticClass: "form-inline",
                              attrs: { inline: !0, model: e.formParams },
                            },
                            [
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a("self-region-tree", {
                                    attrs: {
                                      treeEl: "qryRegionTree",
                                      mode: "1",
                                      selectObj: e.regionObj,
                                      size: "small",
                                      placeholder: "地区",
                                    },
                                    on: { dbClickCallBack: e.dbClickCallBack },
                                  }),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-select",
                                    {
                                      attrs: {
                                        size: "small",
                                        clearable: "",
                                        placeholder: "状态",
                                      },
                                      model: {
                                        value: e.formParams.plotState,
                                        callback: function (t) {
                                          e.$set(e.formParams, "plotState", t);
                                        },
                                        expression: "formParams.plotState",
                                      },
                                    },
                                    e._l(e.options, function (e) {
                                      return a("el-option", {
                                        key: e.plotState,
                                        attrs: {
                                          label: e.label,
                                          value: e.plotState,
                                        },
                                      });
                                    }),
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        icon: "el-icon-search",
                                        size: "small",
                                      },
                                      on: { click: e.searchInfo },
                                    },
                                    [e._v("查询")],
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        icon: "el-icon-download",
                                        size: "small",
                                      },
                                      on: { click: e.exportInfo },
                                    },
                                    [e._v("导出")],
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "warning",
                                        icon: "el-icon-upload2",
                                        size: "small",
                                      },
                                      on: {
                                        click: function (t) {
                                          return e.importInfo();
                                        },
                                      },
                                    },
                                    [e._v("导入")],
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        icon: "el-icon-minus",
                                        size: "small",
                                      },
                                      on: { click: e.deleteData },
                                    },
                                    [e._v("删除")],
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", size: "small" },
                                      on: { click: e.view },
                                    },
                                    [e._v("查看")],
                                  ),
                                  a(
                                    "el-dialog",
                                    {
                                      attrs: {
                                        title: "清单",
                                        visible: e.dialogVisible,
                                        width: "70%",
                                        center: "",
                                        "before-close": e.handleClose,
                                      },
                                      on: {
                                        "update:visible": function (t) {
                                          e.dialogVisible = t;
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        "el-table",
                                        {
                                          directives: [
                                            {
                                              name: "loading",
                                              rawName: "v-loading",
                                              value: e.tableDataLoading,
                                              expression: "tableDataLoading",
                                            },
                                          ],
                                          ref: "table",
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            height: "350px",
                                            data: e.dialogData,
                                            size: "mini",
                                            stripe: "",
                                            border: "",
                                            "highlight-current-row": "",
                                            "element-loading-text":
                                              "数据加载中，请稍后！",
                                            "element-loading-spinner":
                                              "el-icon-loading",
                                            "element-loading-background":
                                              "rgba(255, 255, 255, 0.8)",
                                            "default-sort": {
                                              prop: "state",
                                              order: "descending",
                                            },
                                          },
                                        },
                                        [
                                          a("el-table-column", {
                                            attrs: {
                                              prop: "state",
                                              label: "处理状态",
                                              sortable: "",
                                              "show-overflow-tooltip": "",
                                              width: "150",
                                            },
                                          }),
                                          a("el-table-column", {
                                            attrs: {
                                              prop: "servAccNbr",
                                              label: "SERV_ID",
                                              sortable: "",
                                              "show-overflow-tooltip": "",
                                              width: "160",
                                            },
                                          }),
                                          a("el-table-column", {
                                            attrs: {
                                              prop: "orgId",
                                              label: "新机构ID",
                                              sortable: "",
                                              width: "160",
                                            },
                                          }),
                                          a("el-table-column", {
                                            attrs: {
                                              prop: "isOther",
                                              label: "是否跨四级调整",
                                              sortable: "",
                                              width: "210",
                                            },
                                          }),
                                          a("el-table-column", {
                                            attrs: {
                                              prop: "name",
                                              label: "新机构名称",
                                              sortable: "",
                                              width: "210",
                                            },
                                          }),
                                          a("el-table-column", {
                                            attrs: {
                                              prop: "path",
                                              label: "新机构路径",
                                              sortable: "",
                                              width: "210",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "block" },
                                        [
                                          a("el-pagination", {
                                            attrs: {
                                              background: "",
                                              "current-page":
                                                e.commonObj.pageNum,
                                              "page-sizes": [
                                                10, 30, 50, 100, 300, 500,
                                              ],
                                              "page-size": e.commonObj.pageSize,
                                              layout:
                                                "total, sizes, prev, pager, next, jumper",
                                              total: e.dialogTotal,
                                            },
                                            on: {
                                              "size-change": e.sizeChange,
                                              "current-change": e.currentChange,
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", size: "small" },
                                      on: { click: e.submit },
                                    },
                                    [e._v("提交审批")],
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-dialog",
                                    {
                                      attrs: {
                                        title: "跨四级调整机构审批说明",
                                        visible: e.dialogFormVisible1,
                                        center: "",
                                        width: "30%",
                                      },
                                      on: {
                                        "update:visible": function (t) {
                                          e.dialogFormVisible1 = t;
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        "el-form",
                                        { attrs: { model: e.commonObj } },
                                        [
                                          a(
                                            "el-form-item",
                                            { attrs: { label: "审批意见:" } },
                                            [
                                              a(
                                                "el-radio",
                                                {
                                                  staticStyle: {
                                                    "margin-left": "55px",
                                                  },
                                                  attrs: { label: "1" },
                                                  model: {
                                                    value:
                                                      e.commonObj.identity2,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.commonObj,
                                                        "identity2",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "commonObj.identity2",
                                                  },
                                                },
                                                [e._v("同意")],
                                              ),
                                              a(
                                                "el-radio",
                                                {
                                                  attrs: { label: "2" },
                                                  model: {
                                                    value:
                                                      e.commonObj.identity2,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.commonObj,
                                                        "identity2",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "commonObj.identity2",
                                                  },
                                                },
                                                [e._v("不同意")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a("br"),
                                          a(
                                            "el-form-item",
                                            {
                                              attrs: {
                                                label: "机构调整审批说明:",
                                              },
                                            },
                                            [
                                              a("el-input", {
                                                staticStyle: { width: "220px" },
                                                attrs: {
                                                  size: "small",
                                                  type: "textarea",
                                                  rows: 4,
                                                  autocomplete: "off",
                                                },
                                                model: {
                                                  value: e.commonObj.remark,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.commonObj,
                                                      "remark",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "commonObj.remark",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a(
                                        "div",
                                        {
                                          staticClass: "dialog-footer",
                                          attrs: { slot: "footer" },
                                          slot: "footer",
                                        },
                                        [
                                          a(
                                            "el-button",
                                            {
                                              attrs: {
                                                type: "primary",
                                                size: "small",
                                              },
                                              on: { click: e.sgsApproval },
                                            },
                                            [e._v("确 定")],
                                          ),
                                          a(
                                            "el-button",
                                            {
                                              attrs: { size: "small" },
                                              on: { click: e.close2 },
                                            },
                                            [e._v("取 消")],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  a(
                                    "el-button",
                                    {
                                      attrs: { type: "primary", size: "small" },
                                      on: { click: e.fgsVisible },
                                    },
                                    [e._v("管理审批")],
                                  ),
                                  a(
                                    "el-dialog",
                                    {
                                      attrs: {
                                        title: "跨四级调整机构审批说明",
                                        visible: e.dialogFormVisible,
                                        center: "",
                                        width: "30%",
                                      },
                                      on: {
                                        "update:visible": function (t) {
                                          e.dialogFormVisible = t;
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        "el-form",
                                        { attrs: { model: e.commonObj } },
                                        [
                                          a(
                                            "el-form-item",
                                            { attrs: { label: "审批意见:" } },
                                            [
                                              a(
                                                "el-radio",
                                                {
                                                  staticStyle: {
                                                    "margin-left": "55px",
                                                  },
                                                  attrs: { label: "3" },
                                                  model: {
                                                    value:
                                                      e.commonObj.identity1,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.commonObj,
                                                        "identity1",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "commonObj.identity1",
                                                  },
                                                },
                                                [e._v("同意")],
                                              ),
                                              a(
                                                "el-radio",
                                                {
                                                  attrs: { label: "4" },
                                                  model: {
                                                    value:
                                                      e.commonObj.identity1,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.commonObj,
                                                        "identity1",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "commonObj.identity1",
                                                  },
                                                },
                                                [e._v("不同意")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a("br"),
                                          a(
                                            "el-form-item",
                                            {
                                              attrs: {
                                                label: "机构调整审批说明:",
                                              },
                                            },
                                            [
                                              a("el-input", {
                                                staticStyle: { width: "220px" },
                                                attrs: {
                                                  size: "small",
                                                  type: "textarea",
                                                  rows: 4,
                                                  autocomplete: "off",
                                                },
                                                model: {
                                                  value: e.commonObj.remark,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.commonObj,
                                                      "remark",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "commonObj.remark",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a(
                                        "div",
                                        {
                                          staticClass: "dialog-footer",
                                          attrs: { slot: "footer" },
                                          slot: "footer",
                                        },
                                        [
                                          a(
                                            "el-button",
                                            {
                                              attrs: {
                                                type: "primary",
                                                size: "small",
                                              },
                                              on: { click: e.fgsApproval },
                                            },
                                            [e._v("确 定")],
                                          ),
                                          a(
                                            "el-button",
                                            {
                                              attrs: { size: "small" },
                                              on: { click: e.close3 },
                                            },
                                            [e._v("取 消")],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          e.dialog.visible
                            ? a(
                                "upload-file",
                                {
                                  ref: "upload",
                                  staticStyle: { width: "30%" },
                                  attrs: {
                                    dialog: e.dialog,
                                    action: e.dialog.action,
                                    extraData: e.uploadForm,
                                    accept: ".xls,.xlsx",
                                    attachmentId: e.dialog.attachmentId,
                                  },
                                  on: {
                                    upload: e.submitUpload,
                                    successCallBack: e.successCallBack,
                                  },
                                },
                                [
                                  a(
                                    "el-form",
                                    {
                                      ref: "uploadForm",
                                      attrs: {
                                        model: e.uploadForm,
                                        "status-icon": "",
                                        "label-position": "right",
                                        "label-width": "100px",
                                      },
                                    },
                                    [
                                      a(
                                        "el-form-item",
                                        { attrs: { label: "" } },
                                        [
                                          a(
                                            "el-select",
                                            {
                                              staticStyle: {
                                                "padding-left": "15%",
                                                width: "60%",
                                              },
                                              attrs: {
                                                size: "small",
                                                clearable: "",
                                                placeholder: "调整机构",
                                              },
                                              model: {
                                                value: e.uploadForm.state,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.uploadForm,
                                                    "state",
                                                    t,
                                                  );
                                                },
                                                expression: "uploadForm.state",
                                              },
                                            },
                                            e._l(e.options1, function (e) {
                                              return a("el-option", {
                                                key: e.state,
                                                attrs: {
                                                  label: e.label,
                                                  value: e.state,
                                                },
                                              });
                                            }),
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a(
                                        "el-form-item",
                                        { attrs: { label: "" } },
                                        [
                                          a("el-input", {
                                            staticStyle: {
                                              "padding-left": "15%",
                                              width: "60%",
                                            },
                                            attrs: {
                                              type: "textarea",
                                              rows: 2,
                                              size: "small",
                                              clearable: "",
                                              placeholder: "调整原因说明",
                                            },
                                            model: {
                                              value: e.uploadForm.remark,
                                              callback: function (t) {
                                                e.$set(
                                                  e.uploadForm,
                                                  "remark",
                                                  t,
                                                );
                                              },
                                              expression: "uploadForm.remark",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e._e(),
                        ],
                        1,
                      ),
                      a(
                        "page-content",
                        [
                          a(
                            "el-table",
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: e.tableDataLoading,
                                  expression: "tableDataLoading",
                                },
                              ],
                              ref: "table",
                              staticStyle: { width: "100%" },
                              attrs: {
                                height: e.tableHeight,
                                data: e.tableData,
                                size: "small",
                                stripe: "",
                                border: "",
                                "highlight-current-row": "",
                                "element-loading-text": "数据加载中，请稍后！",
                                "element-loading-spinner": "el-icon-loading",
                                "element-loading-background":
                                  "rgba(255, 255, 255, 0.8)",
                              },
                              on: { "current-change": e.handleCurrentChange },
                            },
                            [
                              a("el-table-column", {
                                attrs: {
                                  prop: "regionName",
                                  label: "本地网",
                                  "show-overflow-tooltip": "",
                                  width: "100",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  prop: "staffName",
                                  label: "申请人",
                                  "show-overflow-tooltip": "",
                                  width: "100",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  prop: "createDate",
                                  label: "申请时间",
                                  width: "150",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  prop: "remark",
                                  label: "申请备注",
                                  width: "420",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  prop: "applyStaffName",
                                  label: "审批人",
                                  width: "",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  prop: "applyDate",
                                  label: "审批时间",
                                  width: "",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  prop: "applyRemark",
                                  label: "审批备注",
                                },
                              }),
                              a("el-table-column", {
                                attrs: { prop: "stateName", label: "审批状态" },
                              }),
                            ],
                            1,
                          ),
                          a(
                            "div",
                            { staticClass: "block" },
                            [
                              a("el-pagination", {
                                attrs: {
                                  background: "",
                                  "current-page": e.formParams.pageNum,
                                  "page-sizes": [10, 30, 50, 100, 300, 500],
                                  "page-size": e.formParams.pageSize,
                                  layout:
                                    "total, sizes, prev, pager, next, jumper",
                                  total: e.total,
                                },
                                on: {
                                  "size-change": e.sizeChange,
                                  "current-change": e.currentChange,
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e.dialogUpload.visible
                ? a(
                    "upload-file",
                    {
                      ref: "upload",
                      attrs: {
                        dialog: e.dialogUpload,
                        top: "60px",
                        action: "qry/importInfo",
                        extraData: e.dialogUpload.uploadForm,
                        accept: ".xls,.xlsx",
                        attachmentId: e.dialogUpload.attachmentId,
                      },
                      on: {
                        upload: e.submitUpload,
                        successCallBack: e.successUploadCallBack,
                      },
                    },
                    [
                      a(
                        "el-form",
                        {
                          ref: "uploadForm",
                          staticClass: "function-dialog-form",
                          attrs: {
                            model: e.dialogUpload.uploadForm,
                            "status-icon": "",
                            rules: e.dialogUpload.uploadRules,
                            "label-position": "right",
                            "label-width": "0px",
                          },
                        },
                        [
                          a(
                            "el-row",
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20, offset: 2 } },
                                [
                                  a(
                                    "el-form-item",
                                    { attrs: { label: "", prop: "" } },
                                    [
                                      a(
                                        "div",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                            "margin-top": "-35px",
                                          },
                                        },
                                        [
                                          e._v(
                                            e._s(
                                              e.dialogUpload.remarkInfo.title,
                                            ) + ":",
                                          ),
                                        ],
                                      ),
                                      e._l(
                                        e.dialogUpload.remarkInfo.text,
                                        function (t) {
                                          return a(
                                            "div",
                                            {
                                              staticStyle: {
                                                "line-height": "25px",
                                              },
                                            },
                                            [e._v(e._s(t))],
                                          );
                                        },
                                      ),
                                    ],
                                    2,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20, offset: 2 } },
                                [
                                  a(
                                    "el-form-item",
                                    { attrs: { label: "", prop: "" } },
                                    [
                                      a(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                            "margin-right": "20px",
                                            "margin-left": "27px",
                                          },
                                        },
                                        [e._v("调整原因:")],
                                      ),
                                      a(
                                        "el-select",
                                        {
                                          staticStyle: { width: "50%" },
                                          attrs: { size: "mini" },
                                          model: {
                                            value:
                                              e.dialogUpload.uploadForm.impType,
                                            callback: function (t) {
                                              e.$set(
                                                e.dialogUpload.uploadForm,
                                                "impType",
                                                t,
                                              );
                                            },
                                            expression:
                                              "dialogUpload.uploadForm.impType",
                                          },
                                        },
                                        [
                                          a("el-option", {
                                            attrs: {
                                              label: "机构调整",
                                              value: "1",
                                            },
                                          }),
                                          a("el-option", {
                                            attrs: {
                                              label: "网格合并",
                                              value: "2",
                                            },
                                          }),
                                          a("el-option", {
                                            attrs: {
                                              label: "网格拆分",
                                              value: "3",
                                            },
                                          }),
                                          a("el-option", {
                                            attrs: {
                                              label: "空间库调整",
                                              value: "4",
                                            },
                                          }),
                                          a("el-option", {
                                            attrs: {
                                              label: "单移调整",
                                              value: "5",
                                            },
                                          }),
                                          a("el-option", {
                                            attrs: {
                                              label: "从政企类规则调整",
                                              value: "6",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-form-item",
                                    { attrs: { label: "", prop: "" } },
                                    [
                                      a(
                                        "span",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                            "margin-right": "20px",
                                          },
                                        },
                                        [e._v("调整原因说明:")],
                                      ),
                                      a("el-input", {
                                        staticStyle: { width: "50%" },
                                        attrs: {
                                          size: "mini",
                                          type: "textarea",
                                          autosize: { minRows: 2, maxRows: 3 },
                                          placeholder: "输入调整原因说明",
                                        },
                                        model: {
                                          value:
                                            e.dialogUpload.uploadForm
                                              .impTypeDesc,
                                          callback: function (t) {
                                            e.$set(
                                              e.dialogUpload.uploadForm,
                                              "impTypeDesc",
                                              t,
                                            );
                                          },
                                          expression:
                                            "dialogUpload.uploadForm.impTypeDesc",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      e.dialogUpload.finished
                        ? a(
                            "el-table",
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: e.tableDataLoading,
                                  expression: "tableDataLoading",
                                },
                              ],
                              key: 12334,
                              ref: "dialogTable",
                              staticStyle: { width: "100%" },
                              attrs: {
                                slot: "table",
                                height: "auto",
                                data: e.dialogUpload.tableData,
                                size: "mini",
                                stripe: "",
                                border: "",
                                "highlight-current-row": "",
                                "element-loading-text": "数据加载中，请稍后！",
                                "element-loading-spinner": "el-icon-loading",
                                "element-loading-background":
                                  "rgba(255, 255, 255, 0.8)",
                              },
                              slot: "table",
                            },
                            [
                              a(
                                "el-table-column",
                                { attrs: { label: "导入错误列表" } },
                                [
                                  a("el-table-column", {
                                    attrs: {
                                      prop: "rowNum",
                                      label: "EXEL行号",
                                      "show-overflow-tooltip": "",
                                      width: "80",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      prop: "impError",
                                      label: "错误信息",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      prop: "row1",
                                      label: "serv_id",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      prop: "row2",
                                      label: "机构ID（org_id）",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        r = [],
        s = a("bd86"),
        o = a("25be"),
        n = a("b418"),
        c = {
          components: { SelfRegionTree: o["a"], UploadFile: n["a"] },
          data: function () {
            return {
              dialogUpload: {
                visible: !1,
                tableData: [],
                attachmentId: 17443,
                finished: !1,
                title: "存量用户批量调整导入",
                remarkInfo: {
                  title: "格式说明",
                  text: [
                    "1.请按照模版格式填写数据（不能改变各列的排列顺序，只能填写在第1张工作表中；第1行为标题栏，系统将从第2行开始读取数据）。",
                    "2.每次导入数据量不能超过2000条。",
                    "3.每天22:00后为系统调整时间,不能导入认领。",
                  ],
                },
                uploadForm: {
                  impType: "1",
                  impTypeDesc: "",
                  impDesc: "存量用户批量调整导入",
                  serviceName: "importStockCustAdjust",
                },
              },
              tableHeight: 400,
              tableDataLoading: !1,
              total: 0,
              tableData: [],
              dialogTotal: 0,
              dialogData: [],
              dialogVisible: !1,
              dialogVisible1: !1,
              dialogFormVisible: !1,
              dialogFormVisible1: !1,
              options: [
                { plotState: "8", label: "待提交" },
                { plotState: "0", label: "待审批" },
                { plotState: "3", label: "分公司审批通过" },
                { plotState: "4", label: "分公司审批未通过" },
              ],
              options1: [
                { state: 1, label: "机构调整" },
                { state: 2, label: "网格合并" },
                { state: 3, label: "网格拆分" },
                { state: 4, label: "空间库调整" },
                { state: 5, label: "单移调整" },
                { state: 6, label: "从政企类规则调整" },
              ],
              formParams: {
                bssOrgAreaId: "",
                plotState: "",
                pageNum: 1,
                pageSize: 10,
              },
              regionObj: { regionId: "", regionName: "" },
              commonObj: {
                id: "",
                state: "",
                identity1: "3",
                identity2: "1",
                remark: "",
                pageNum: 1,
                pageSize: 10,
              },
              uploadForm: { state: 1, remark: "" },
              dialog: {
                visible: !1,
                title: "存量用户调整",
                action: "/bssOrgManage/importInfo",
                attachmentId: 17443,
              },
            };
          },
          mounted: function () {},
          methods:
            ((i = {
              importInfo: function () {
                var e = this.$refs.table.selection;
                e &&
                  1 == e.length &&
                  (this.dialogUpload.uploadForm.modeRuleId = e[0].modeRuleId),
                  (this.dialogUpload.visible = !0),
                  (this.dialogUpload.finished = !1);
              },
              successCallBack: function () {},
              successUploadCallBack: function (e) {
                e.success
                  ? ((this.dialogUpload.tableData = e.data),
                    (this.dialogUpload.finished = !0))
                  : this.$message({
                      showClose: !1,
                      message: e.message,
                      type: "error",
                    });
              },
              validationUploadForm: function () {
                var e = !0;
                return (
                  this.$refs.uploadForm.validate(function (t) {
                    t || (e = !1);
                  }),
                  e
                );
              },
              submitUpload: function () {
                (this.dialogUpload.finished = !1),
                  this.validationUploadForm() &&
                    this.$refs.upload.submitUpload(function (e) {});
              },
              searchInfo: function () {
                (this.commonObj.state = ""),
                  (this.formParams.pageNum = 1),
                  this.getTableData();
              },
              getTableData: function () {
                var e = this;
                this.tableDataLoading = !0;
                var t = JSON.parse(JSON.stringify(this.formParams));
                this.$http
                  .post("/bssOrgManage/qryServInCommApply", t)
                  .then(function (t) {
                    t.success &&
                      ((e.total = t.data.total), (e.tableData = t.data.list)),
                      (e.tableDataLoading = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading = !1;
                  });
              },
              handleCurrentChange: function (e) {
                (this.commonObj.id = e.id), (this.commonObj.state = e.state);
              },
              deleteData: function () {
                var e = this;
                if ("" == this.commonObj.state && "0" != this.commonObj.state)
                  return (
                    this.$message({
                      message: "请选择一条记录!",
                      type: "warning",
                    }),
                    !1
                  );
                //// if ("8" != this.commonObj.state)
                ////  return (
                ////    this.$message({
                ////      message: "只能对状态为待提交的记录进行删除！",
                ////      type: "warning",
                ////    }),
                ////    !1
                ////  );
                var t = JSON.parse(JSON.stringify(this.commonObj));
                this.$http
                  .post("/bssOrgManage/deleteServInCommApply", t)
                  .then(function (t) {
                    t.success &&
                      (e.getTableData(),
                      e.$message({ message: "删除成功!", type: "success" }));
                  })
                  .catch(function (e) {});
              },
              addData: function () {
                (this.dialogVisible1 = !0), (this.dialog.visible = !0);
              },
              close1: function () {
                (this.dialogVisible1 = !1),
                  (this.uploadForm.state = 1),
                  (this.uploadForm.remark = "");
              },
              close2: function () {
                (this.dialogFormVisible1 = !1),
                  (this.commonObj.identity2 = "1"),
                  (this.commonObj.remark = "");
              },
              close3: function () {
                (this.dialogFormVisible = !1),
                  (this.commonObj.identity1 = "3"),
                  (this.commonObj.remark = "");
              },
              view: function () {
                var e = this;
                if ("" == this.commonObj.state && "0" != this.commonObj.state)
                  return (
                    this.$message({
                      message: "请选择一条记录!",
                      type: "warning",
                    }),
                    !1
                  );
                (this.dialogVisible = !0), (this.tableDataLoading = !0);
                var t = JSON.parse(JSON.stringify(this.commonObj));
                this.$http
                  .post("/bssOrgManage/viewServInCommApply", t)
                  .then(function (t) {
                    t.success &&
                      ((e.dialogTotal = t.data.total),
                      (e.dialogData = t.data.list)),
                      (e.tableDataLoading = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading = !1;
                  });
              },
              handleClose: function () {
                (this.tableDataLoading = !1), (this.dialogVisible = !1);
              },
              submit: function () {
                var e = this;
                if ("" == this.commonObj.state && "0" != this.commonObj.state)
                  return (
                    this.$message({
                      message: "请选择一条记录!",
                      type: "warning",
                    }),
                    !1
                  );
                if ("8" != this.commonObj.state)
                  return (
                    this.$message({
                      message: "只能对状态为待提交的记录进行提交审批！",
                      type: "warning",
                    }),
                    !1
                  );
                var t = JSON.parse(JSON.stringify(this.commonObj));
                this.$http
                  .post("/bssOrgManage/submitServInCommApply", t)
                  .then(function (t) {
                    t.success &&
                      (e.getTableData(),
                      e.$message({ message: "操作成功!", type: "success" }));
                  })
                  .catch(function (e) {});
              },
              fgsVisible: function () {
                return "" == this.commonObj.state && "0" != this.commonObj.state
                  ? (this.$message({
                      message: "请选择一条记录!",
                      type: "warning",
                    }),
                    !1)
                  : "0" != this.commonObj.state
                    ? (this.$message({
                        message: "分公司只能对状态为待审批的记录进行审批！",
                        type: "warning",
                      }),
                      !1)
                    : void (this.dialogFormVisible = !0);
              },
              fgsApproval: function () {
                var e = this;
                if ("" == this.commonObj.remark)
                  return (
                    this.$message({ message: "请填写说明!", type: "warning" }),
                    !1
                  );
                var t = JSON.parse(JSON.stringify(this.commonObj));
                this.$http
                  .post("/bssOrgManage/fgsServInCommApply", t)
                  .then(function (t) {
                    t.success &&
                      (e.getTableData(),
                      e.$message({ message: "操作成功!", type: "success" })),
                      (e.dialogFormVisible = !1),
                      (e.commonObj.identity1 = "3"),
                      (e.commonObj.remark = "");
                  })
                  .catch(function (t) {
                    (e.dialogFormVisible = !1),
                      (e.commonObj.identity1 = "3"),
                      (e.commonObj.remark = "");
                  });
              },
              sgsVisible: function () {
                return "" == this.commonObj.state && "0" != this.commonObj.state
                  ? (this.$message({
                      message: "请选择一条记录!",
                      type: "warning",
                    }),
                    !1)
                  : "3" != this.commonObj.state
                    ? (this.$message({
                        message:
                          "省公司只能对状态为分公司审批通过的记录进行审批！",
                        type: "warning",
                      }),
                      !1)
                    : void (this.dialogFormVisible1 = !0);
              },
              sgsApproval: function () {
                var e = this;
                if ("" == this.commonObj.remark)
                  return (
                    this.$message({ message: "请填写说明!", type: "warning" }),
                    !1
                  );
                var t = JSON.parse(JSON.stringify(this.commonObj));
                this.$http
                  .post("/bssOrgManage/sgsServInCommApply", t)
                  .then(function (t) {
                    t.success &&
                      (e.getTableData(),
                      e.$message({ message: "操作成功!", type: "success" })),
                      (e.dialogFormVisible1 = !1),
                      (e.commonObj.identity2 = "1"),
                      (e.commonObj.remark = "");
                  })
                  .catch(function (t) {
                    (e.dialogFormVisible1 = !1),
                      (e.commonObj.identity2 = "1"),
                      (e.commonObj.remark = "");
                  });
              },
              exportInfo: function () {
                this.$export.exportExcelPost(
                  "bssOrgManage/exportAjustInfo",
                  this.formParams,
                  "存量用户批量调整",
                  "xlsx",
                );
              },
              sizeChange: function (e) {
                (this.formParams.pageSize = e), this.getTableData();
              },
              currentChange: function (e) {
                (this.formParams.pageNum = e), this.getTableData();
              },
              dbClickCallBack: function () {
                this.formParams.bssOrgAreaId = this.regionObj.regionId;
              },
            }),
            Object(s["a"])(i, "submitUpload", function () {
              this.$refs.upload.submitUpload(function (e) {});
            }),
            Object(s["a"])(i, "successCallBack", function (e) {
              e.success
                ? this.$message({
                    showClose: !1,
                    message: e.message,
                    type: "success",
                  })
                : this.$message({
                    showClose: !1,
                    message: e.vOutErrMsg,
                    type: "error",
                  });
            }),
            i),
        },
        d = c,
        p = a("2877"),
        m = Object(p["a"])(d, l, r, !1, null, null, null);
      t["default"] = m.exports;
    },
    "0328": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "role-layout" },
            [
              a(
                "keep-alive",
                [
                  e.$route.meta.keepAlive ? a("router-view") : e._e(),
                  e._v(">\n    "),
                ],
                1,
              ),
              e.$route.meta.keepAlive ? e._e() : a("router-view"),
            ],
            1,
          );
        },
        l = [],
        r = {
          data: function () {
            return {};
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["default"] = n.exports;
    },
    "03d6": function (e, t, a) {
      "use strict";
      var i = a("acf9"),
        l = a.n(i);
      l.a;
    },
    "084e": function (e, t, a) {
      "use strict";
      var i = a("134f"),
        l = a.n(i);
      l.a;
    },
    "0e71": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            { staticClass: "channel-org-navi-container" },
            [
              a(
                "page-content",
                { attrs: { size: "mini" } },
                [
                  a(
                    "el-row",
                    [
                      a(
                        "el-col",
                        { attrs: { span: 10 } },
                        [
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                              },
                            },
                            [
                              a("el-col", { attrs: { span: 2 } }, [
                                a("i", {
                                  staticClass: "el-icon-star-on",
                                  staticStyle: {
                                    "font-size": "28px",
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(1);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建四级穿"),
                                          a("BR"),
                                          e._v("透管理树(1-4级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(2);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建渠道销售点、"),
                                          a("BR"),
                                          e._v("员工数据(6-7级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(3);
                                            },
                                          },
                                        },
                                        [
                                          e._v("销售点(6级)映"),
                                          a("BR"),
                                          e._v("射到支局(4级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-bottom-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                              },
                            },
                            [
                              a("el-col", { attrs: { span: 2 } }, [
                                a("i", {
                                  staticClass: "el-icon-star-on",
                                  staticStyle: {
                                    "font-size": "28px",
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a("el-col", { attrs: { span: 8 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(4);
                                            },
                                          },
                                        },
                                        [
                                          e._v("班组认领支局、"),
                                          a("BR"),
                                          e._v("责任人维护"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(5);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建营销网格"),
                                          a("BR"),
                                          e._v("(7级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-col",
                                { attrs: { span: 1 } },
                                [
                                  a(
                                    "el-row",
                                    { staticStyle: { height: "50%" } },
                                    [
                                      a("i", {
                                        staticClass: "el-icon-top-right",
                                        staticStyle: {
                                          width: "100%",
                                          "text-align": "center",
                                          "line-height": "26px",
                                        },
                                      }),
                                    ],
                                  ),
                                  a(
                                    "el-row",
                                    { staticStyle: { height: "50%" } },
                                    [
                                      a("i", {
                                        staticClass: "el-icon-bottom-right",
                                        staticStyle: {
                                          width: "100%",
                                          "text-align": "center",
                                          "line-height": "26px",
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                              },
                            },
                            [
                              a("el-col", { attrs: { span: 2 } }, [
                                a("i", {
                                  staticClass: "el-icon-star-on",
                                  staticStyle: {
                                    "font-size": "28px",
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(6);
                                            },
                                          },
                                        },
                                        [
                                          e._v("清理资源标准"),
                                          a("BR"),
                                          e._v("地址"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(7);
                                            },
                                          },
                                        },
                                        [
                                          e._v("物理网格单元"),
                                          a("BR"),
                                          e._v("上图"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(8);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建营销网格"),
                                          a("BR"),
                                          e._v("单元(8级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-top-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-col",
                        { attrs: { span: 3 } },
                        [
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "40px",
                                "padding-bottom": "20px",
                              },
                            },
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: {
                                            width: "100%",
                                            height: "52px",
                                          },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(9);
                                            },
                                          },
                                        },
                                        [e._v("认领包区责任人")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 4 } }, [
                                a("i", {
                                  staticClass: "el-icon-bottom-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "14px",
                                "padding-bottom": "20px",
                              },
                            },
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(10);
                                            },
                                          },
                                        },
                                        [
                                          e._v("选择包区下级营"),
                                          a("BR"),
                                          e._v("销网格单元"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 4 } }, [
                                a("i", {
                                  staticClass: "el-icon-top-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-col",
                        { attrs: { span: 1 } },
                        [
                          a(
                            "el-row",
                            { staticStyle: { "padding-top": "82px" } },
                            [
                              a("i", {
                                staticClass: "el-icon-star-on",
                                staticStyle: {
                                  "font-size": "28px",
                                  width: "100%",
                                  "text-align": "center",
                                  "line-height": "52px",
                                },
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = {
          data: function () {
            return {};
          },
          created: function () {},
          mounted: function () {},
          methods: {
            chooseFun: function (e) {
              1 == e
                ? this.$router.push({
                    path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/bssOrgManage4",
                    query: {},
                  })
                : 2 == e
                  ? this.$router.push({
                      path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/salePointManage",
                      query: {},
                    })
                  : 3 == e
                    ? this.$router.push({
                        path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/saleToZjMapping",
                        query: {},
                      })
                    : 4 == e
                      ? this.$router.push({
                          path: "/hxcb/gridManagement/salesSupportNew/channelOrgNavi/staffRelBZMagNew",
                          query: {},
                        })
                      : 5 == e
                        ? this.$router.push({
                            path: "/hxcb/gridManagement/salesSupportNew/channelOrgNavi/bssOrgMappingNew",
                            query: {},
                          })
                        : 6 == e &&
                          this.$router.push({
                            path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/cleanStandAddr",
                            query: {},
                          });
            },
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["default"] = n.exports;
    },
    "134f": function (e, t, a) {},
    "1f8b": function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "importSteps" },
            [
              a(
                "el-dialog",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: e.uploadLoading,
                      expression: "uploadLoading",
                    },
                  ],
                  staticClass: "function-dialog",
                  attrs: {
                    width: "1000px",
                    top: e.top,
                    visible: e.dialog.visible,
                    "element-loading-text": "数据导入中......",
                    "element-loading-spinner": "el-icon-loading",
                    "element-loading-background": "rgba(255, 255, 255, 0.8)",
                  },
                  on: {
                    "update:visible": function (t) {
                      return e.$set(e.dialog, "visible", t);
                    },
                    close: e.handleDialogClose,
                  },
                },
                [
                  a(
                    "div",
                    {
                      staticClass: "function-dialog-form-title",
                      attrs: { slot: "title" },
                      slot: "title",
                    },
                    [a("strong", [e._v(e._s(e.dialog.title))])],
                  ),
                  a(
                    "div",
                    { staticClass: "steps" },
                    [
                      a(
                        "el-steps",
                        { attrs: { active: e.active, "align-center": "" } },
                        [
                          a("el-step", {
                            attrs: {
                              title: "上传文件",
                              icon: "el-icon-upload",
                            },
                          }),
                          a("el-step", {
                            attrs: {
                              title: "导入结果",
                              icon: "el-icon-pie-chart",
                            },
                          }),
                          a("el-step", {
                            attrs: {
                              title: "失败清单",
                              icon: "el-icon-s-data",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  e.upLoadContent
                    ? a(
                        "div",
                        { staticClass: "upLoadContent" },
                        [
                          e._t("default"),
                          a(
                            "el-upload",
                            {
                              ref: "upload",
                              staticClass: "el-upload-custome",
                              attrs: {
                                drag: "",
                                "list-type": "picture",
                                multiple: !1,
                                limit: 1,
                                data: e.extraData,
                                "with-credentials": !0,
                                action: e.actionUrl,
                                headers: e.headers,
                                accept: e.accept,
                                "on-success": e.handleSuccess,
                                "on-error": e.handleError,
                                "on-exceed": e.handleExceed,
                                "on-change": e.handleChange,
                                "on-progress": e.handleProgress,
                                "before-upload": e.beforeUpload,
                                "auto-upload": !1,
                              },
                            },
                            [
                              a("i", { staticClass: "el-icon-upload" }),
                              a("div", { staticClass: "el-upload__text" }, [
                                e._v("点击上传"),
                              ]),
                              a(
                                "div",
                                {
                                  staticClass: "el-upload__tip",
                                  attrs: { slot: "tip" },
                                  slot: "tip",
                                },
                                [
                                  e._v(
                                    "\n          注意：目前只支持上传xls文件，且不超过10MB\n          ",
                                  ),
                                  e.attachmentId
                                    ? a(
                                        "el-button",
                                        {
                                          attrs: { type: "text" },
                                          on: { click: e.downloadTemplate },
                                        },
                                        [e._v("【导入模板下载】")],
                                      )
                                    : e._e(),
                                ],
                                1,
                              ),
                            ],
                          ),
                          a(
                            "div",
                            { staticClass: "footer" },
                            [
                              a(
                                "el-button",
                                {
                                  attrs: { type: "primary", size: "small" },
                                  nativeOn: {
                                    click: function (t) {
                                      return e.upload();
                                    },
                                  },
                                },
                                [e._v(e._s(e.uploadBottonText))],
                              ),
                            ],
                            1,
                          ),
                        ],
                        2,
                      )
                    : e._e(),
                  e.compareResult
                    ? a("div", { staticClass: "compareResult" }, [
                        a("div", {
                          staticClass: "chart",
                          staticStyle: {
                            height: "250px",
                            width: "100%",
                            display: "inline-block",
                          },
                          attrs: { id: "chart" },
                        }),
                      ])
                    : e._e(),
                  e.importResult
                    ? a("div", { staticClass: "importResult" }, [
                        a(
                          "div",
                          { staticClass: "failDetail" },
                          [
                            a(
                              "div",
                              {
                                staticStyle: {
                                  "text-align": "right",
                                  margin: "5px 0",
                                },
                              },
                              [
                                a(
                                  "el-button",
                                  {
                                    attrs: {
                                      type: "warning",
                                      icon: "el-icon-download",
                                      size: "mini",
                                    },
                                    on: { click: e.handleExport },
                                  },
                                  [e._v("导出")],
                                ),
                              ],
                              1,
                            ),
                            a(
                              "el-table",
                              {
                                directives: [
                                  {
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: e.failTableLoading,
                                    expression: "failTableLoading",
                                  },
                                ],
                                ref: "multipleTable",
                                staticStyle: { width: "100%" },
                                attrs: {
                                  data: e.failTableData,
                                  "custom-class": "failTable",
                                  height: "450",
                                  size: "small",
                                },
                              },
                              e._l(e.failTableHeadData, function (e, t) {
                                return a("el-table-column", {
                                  key: t,
                                  attrs: {
                                    prop: e.prop,
                                    label: e.label,
                                    align: "center",
                                    width: "reason" == e.prop ? "260px" : "",
                                    "show-overflow-tooltip": "",
                                  },
                                });
                              }),
                              1,
                            ),
                            a(
                              "div",
                              { staticClass: "pagination" },
                              [
                                a("el-pagination", {
                                  attrs: {
                                    background: "",
                                    "hide-on-single-page": "",
                                    layout:
                                      "total, sizes, prev, pager, next, jumper",
                                    total: e.total,
                                    "page-size":
                                      e.queryFailTableParams.pageSize,
                                    "current-page":
                                      e.queryFailTableParams.pageNum,
                                    "page-sizes": [10, 30, 50, 100, 300, 500],
                                  },
                                  on: {
                                    "current-change": e.currentChangeForFail,
                                    "size-change": e.sizeChangeForFail,
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ])
                    : e._e(),
                  a(
                    "div",
                    { staticClass: "stepBtn" },
                    [
                      e.nextStepFlag
                        ? a(
                            "el-button",
                            {
                              attrs: { size: "small", type: "primary" },
                              on: { click: e.nextStep },
                            },
                            [e._v("下一步")],
                          )
                        : e._e(),
                      e.preStepFlag
                        ? a(
                            "el-button",
                            {
                              attrs: { size: "small", type: "primary" },
                              on: { click: e.preStep },
                            },
                            [e._v("上一步")],
                          )
                        : e._e(),
                      e.addImportFlag
                        ? a(
                            "el-button",
                            {
                              attrs: { size: "small", type: "primary" },
                              on: { click: e.addImport },
                            },
                            [e._v("上一步")],
                          )
                        : e._e(),
                    ],
                    1,
                  ),
                ],
              ),
            ],
            1,
          );
        },
        l = [],
        r =
          (a("8e6e"),
          a("ac6a"),
          a("456d"),
          a("28a5"),
          a("7f7f"),
          a("aef6"),
          a("bd86")),
        s = (a("c5f6"), a("e244")),
        o = a.n(s),
        n = a("fa48"),
        c = a.n(n),
        d = a("3eec"),
        p = a.n(d),
        m = (a("c096"), a("2f62")),
        h = a("13f4"),
        g = a("313e"),
        u = a.n(g);
      function b(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(a, !0).forEach(function (t) {
                Object(r["a"])(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : b(a).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t),
                  );
                });
        }
        return e;
      }
      var v = {
          name: "ImportSteps",
          props: {
            dialog: Object,
            action: { type: String, default: "#" },
            accept: {
              type: String,
              default:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",
            },
            extraData: Object,
            attachmentId: { type: Number, default: null },
            limitSize: { type: Number, default: 10 },
            uploadBottonText: { type: String, default: "开始上传" },
            top: { type: String },
          },
          created: function () {
            this.headers = {
              Authorization: "Bearer " + this.token,
              staffId: [
                JSON.parse(localStorage.getItem("loginJobParams")).staffId,
              ],
              bssOrgId: [
                JSON.parse(localStorage.getItem("loginJobParams")).bssOrgId,
              ],
            };
          },
          computed: f(
            {
              actionUrl: function () {
                return h["a"].BASE_URL + this.action;
              },
            },
            Object(m["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          data: function () {
            return {
              active: 0,
              upLoadContent: !0,
              compareResult: !1,
              importResult: !1,
              nextStepFlag: !1,
              preStepFlag: !1,
              addImportFlag: !1,
              headers: {},
              uploadLoading: !1,
              chart: {},
              failNum: "",
              successNum: "",
              taskId: "",
              failTableHeadData: [],
              failTableData: [],
              failTableLoading: !1,
              total: 0,
              queryFailTableParams: { pageNum: 1, pageSize: 10, taskId: "" },
            };
          },
          mounted: function () {},
          methods: {
            upload: function () {
              this.$emit("upload");
            },
            submitUpload: function () {
              var e = !0;
              0 != this.$refs.upload.uploadFiles.length
                ? e && this.$refs.upload.submit()
                : this.$message({
                    showClose: !0,
                    message: "请点击上传文件!",
                    type: "warning",
                  });
            },
            beforeUpload: function (e) {
              var t = e.size / 1024 / 1024 > this.limitSize;
              return (
                t &&
                  this.$message({
                    showClose: !0,
                    duration: 0,
                    message: "上传文件大小不能超过【10MB】!",
                    type: "warning",
                  }),
                !t
              );
            },
            handleProgress: function () {
              this.uploadLoading = !0;
            },
            handleChange: function (e) {
              e.name.endsWith(".doc") || e.name.endsWith(".docx")
                ? (e.url = c.a)
                : e.name.endsWith(".xls") || e.name.endsWith(".xlsx")
                  ? (e.url = o.a)
                  : e.name.endsWith(".pdf")
                    ? (e.url = p.a)
                    : (e.url = e);
            },
            handleExceed: function () {
              this.$message({
                showClose: !0,
                message: "导入文件个数超出限制！",
                type: "warning",
              });
            },
            handleSuccess: function (e, t) {
              var a = this;
              (this.uploadLoading = !1),
                null != e &&
                  ("success" === e.status || e.success
                    ? ((this.failNum = e.failNum),
                      (this.successNum = e.successNum),
                      (this.queryFailTableParams.taskId = e.taskId),
                      this.$message({
                        showClose: !0,
                        message: "文件【" + t.name + "】导入成功！",
                        type: "success",
                      }),
                      (this.active = 1),
                      (this.upLoadContent = !1),
                      (this.compareResult = !0),
                      (this.nextStepFlag = !0),
                      this.$nextTick(function () {
                        a.initCompareCharts();
                      }),
                      this.$parent.$refs.uploadForm &&
                        (this.$parent.uploadForm =
                          this.$parent.$options.data().uploadForm),
                      this.$refs.upload.clearFiles(),
                      this.$emit("successCallBack", e))
                    : (this.$refs.upload.clearFiles(),
                      this.$message({
                        showClose: !0,
                        message: e.message
                          ? e.message
                          : "文件【" + t.name + "】导入失败，请重新尝试！",
                        type: "error",
                      }),
                      this.$emit("errorCallBack")));
            },
            handleError: function (e, t) {
              (this.uploadLoading = !1),
                this.$message({
                  showClose: !0,
                  message: "文件【" + t.name + "】导入失败，请重新尝试！",
                  type: "error",
                }),
                this.$emit("errorCallBack");
            },
            handleDialogClose: function () {
              this.$parent.$refs.uploadForm &&
                (this.$parent.uploadForm =
                  this.$parent.$options.data().uploadForm),
                (this.dialog.visible = !1),
                this.$emit("handleDialogClose");
            },
            downloadTemplate: function () {
              (void 0 !== this.extraData.impDesc &&
                "" !== this.extraData.impDesc) ||
                (this.extraData.impDesc = "未命名"),
                "" != this.attachmentId &&
                  this.$export.exportExcelPost(
                    "/download",
                    { attachmentId: this.attachmentId },
                    this.extraData.impDesc,
                    "xls",
                  );
            },
            initCompareCharts: function () {
              var e = this;
              (this.chart = u.a.init(document.getElementById("chart"))),
                this.chart.setOption({
                  title: {
                    text: e.failNum ? "数据总条数" : "",
                    subtext: e.failNum + e.successNum,
                    textStyle: {
                      fontSize: 12,
                      color: "rgba(0,0,0,0.65)",
                      fontWeight: 400,
                    },
                    subtextStyle: {
                      fontSize: 20,
                      color: "#000000",
                      fontWeight: 500,
                    },
                    textAlign: "center",
                    x: "49.5%",
                    y: "43%",
                  },
                  tooltip: { trigger: "item", fontSize: 14 },
                  color: ["red", "green"],
                  series: [
                    {
                      name: "",
                      type: "pie",
                      radius: ["40%", "60%"],
                      center: ["50%", "53%"],
                      avoidLabelOverlap: !1,
                      itemStyle: {
                        borderRadius: 10,
                        borderColor: "#fff",
                        borderWidth: 2,
                      },
                      label: { show: !0, formatter: "{b}:{c}" },
                      emphasis: {
                        label: { show: !0, fontSize: "16", fontWeight: "bold" },
                      },
                      labelLine: { show: !0 },
                      data: [
                        { value: e.failNum, name: "失败条数" },
                        { value: e.successNum, name: "成功条数" },
                      ],
                    },
                  ],
                });
            },
            nextStep: function () {
              var e = this;
              (this.active = 2),
                (this.compareResult = !1),
                setTimeout(function () {
                  (e.importResult = !0),
                    (e.nextStepFlag = !1),
                    (e.addImportFlag = !1),
                    (e.preStepFlag = !0),
                    e.getFailTableData();
                }, 200);
            },
            getFailTableData: function () {
              var e = this;
              (this.failTableLoading = !0),
                (this.failTableHeadData = []),
                this.$http
                  .post(
                    "/myCustomer/getImportFailRecord",
                    this.queryFailTableParams,
                  )
                  .then(function (t) {
                    if (((e.failTableLoading = !1), t.success)) {
                      for (
                        var a = t.data1.columnValue.split(","),
                          i = t.data1.columnName.split(","),
                          l = a.length,
                          r = 0;
                        r < l;
                        r++
                      )
                        e.failTableHeadData.push({ label: i[r], prop: a[r] });
                      (e.failTableData = t.data2.list),
                        (e.total = t.data2.total);
                    } else e.failTableLoading = !1;
                  })
                  .catch(function (t) {
                    e.failTableLoading = !1;
                  });
            },
            preStep: function () {
              var e = this;
              (this.active = 1),
                (this.importResult = !1),
                (this.compareResult = !0),
                (this.nextStepFlag = !0),
                (this.preStepFlag = !1),
                (this.addImportFlag = !0),
                this.$nextTick(function () {
                  e.initCompareCharts();
                });
            },
            addImport: function () {
              var e = this;
              (this.active = 0),
                (this.importResult = !1),
                (this.compareResult = !1),
                setTimeout(function () {
                  (e.upLoadContent = !0),
                    (e.preStepFlag = !1),
                    (e.nextStepFlag = !1),
                    (e.addImportFlag = !1);
                }, 200);
            },
            currentChangeForFail: function (e) {
              (this.queryFailTableParams.pageNum = e), this.getFailTableData();
            },
            sizeChangeForFail: function (e) {
              (this.queryFailTableParams.pageSize = e), this.getFailTableData();
            },
            handleExport: function () {
              this.$export.exportExcelPost(
                "/importHistory/exportFailList",
                { taskId: this.queryFailTableParams.taskId },
                "错误数据导出",
                "xlsx",
              );
            },
          },
        },
        y = v,
        x = (a("5f9b"), a("2877")),
        O = Object(x["a"])(y, i, l, !1, null, "22edeec9", null);
      t["a"] = O.exports;
    },
    "250f": function (e, t, a) {},
    "25be": function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "selfRegionInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          readonly: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.regionName,
                          callback: function (t) {
                            e.$set(e.selectObj, "regionName", t);
                          },
                          expression: "selectObj.regionName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "selfRegionInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "selfRegionInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("7a2c"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    26492: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "page-search",
                [
                  a(
                    "el-form",
                    { ref: "form", attrs: { inline: !0 } },
                    [
                      a(
                        "el-form-item",
                        [
                          a("bss-org-tree", {
                            ref: "BssOrgTree",
                            attrs: {
                              mode: "1",
                              selectObj: e.orgObj,
                              size: "mini",
                              placeholder: "组织机构",
                            },
                            on: { clickCallBack: e.clickCallBack },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-checkbox", {
                            attrs: {
                              size: "mini",
                              label: "是否显示所有下级机构",
                            },
                            model: {
                              value: e.formParams.isFull,
                              callback: function (t) {
                                e.$set(e.formParams, "isFull", t);
                              },
                              expression: "formParams.isFull",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: { size: "mini", placeholder: "机构名称" },
                            model: {
                              value: e.formParams.bssOrgName,
                              callback: function (t) {
                                e.$set(e.formParams, "bssOrgName", t);
                              },
                              expression: "formParams.bssOrgName",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: { size: "mini", placeholder: "网格ID" },
                            model: {
                              value: e.formParams.qryOrgId,
                              callback: function (t) {
                                e.$set(e.formParams, "qryOrgId", t);
                              },
                              expression: "formParams.qryOrgId",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-select",
                            {
                              attrs: {
                                size: "mini",
                                placeholder: "架构层级",
                                clearable: "",
                              },
                              on: { change: e.setOrgType },
                              model: {
                                value: e.formParams.orgLevel,
                                callback: function (t) {
                                  e.$set(e.formParams, "orgLevel", t);
                                },
                                expression: "formParams.orgLevel",
                              },
                            },
                            [
                              a("el-option", {
                                attrs: { value: "1", label: "一级" },
                              }),
                              a("el-option", {
                                attrs: { value: "2", label: "二级" },
                              }),
                              a("el-option", {
                                attrs: { value: "3", label: "三级" },
                              }),
                              a("el-option", {
                                attrs: { value: "4", label: "四级" },
                              }),
                              a("el-option", {
                                attrs: { value: "5", label: "五级" },
                              }),
                              a("el-option", {
                                attrs: { value: "6", label: "六级" },
                              }),
                              a("el-option", {
                                attrs: { value: "7", label: "七级" },
                              }),
                              a("el-option", {
                                attrs: { value: "8", label: "八级" },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-select",
                            {
                              attrs: {
                                size: "mini",
                                placeholder: "机构类型",
                                clearable: "",
                              },
                              model: {
                                value: e.formParams.bssOrgTypeId,
                                callback: function (t) {
                                  e.$set(e.formParams, "bssOrgTypeId", t);
                                },
                                expression: "formParams.bssOrgTypeId",
                              },
                            },
                            e._l(e.qryOrgType, function (e) {
                              return a("el-option", {
                                attrs: { label: e.cm, value: e.cd },
                              });
                            }),
                            1,
                          ),
                        ],
                        1,
                      ),
                      a("br"),
                      a(
                        "el-form-item",
                        [
                          a("grid-char-tree", {
                            attrs: {
                              mode: "1",
                              selectObj: e.selectObj,
                              size: "mini",
                              placeholder: "市场特征",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                size: "mini",
                                type: "primary",
                                icon: "el-icon-search",
                              },
                              on: { click: e.getTableData },
                            },
                            [e._v("查询")],
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        { attrs: { label: "" } },
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                icon: "el-icon-download",
                                size: "mini",
                              },
                              on: { click: e.exportInfo },
                            },
                            [e._v("导出")],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "page-content",
                [
                  a(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.tableDataLoading,
                          expression: "tableDataLoading",
                        },
                      ],
                      ref: "table",
                      staticStyle: { width: "100%" },
                      attrs: {
                        data: e.tableData,
                        height: e.tableHeight,
                        size: "small",
                        stripe: "",
                        border: "",
                        "highlight-current-row": "",
                        "element-loading-text": "数据加载中，请稍后！",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background":
                          "rgba(255, 255, 255, 0.8)",
                      },
                    },
                    e._l(e.tableList, function (e) {
                      return a("el-table-column", {
                        attrs: {
                          prop: e.prop,
                          label: e.label,
                          align: "center",
                          width: e.width,
                        },
                      });
                    }),
                    1,
                  ),
                  a(
                    "div",
                    { staticStyle: { "text-align": "center" } },
                    [
                      a("el-pagination", {
                        attrs: {
                          background: "",
                          layout: "total, sizes, prev, pager, next, jumper",
                          total: e.total,
                          "page-size": e.formParams.pageSize,
                          "current-page": e.formParams.pageNum,
                          "page-sizes": [10, 30, 50, 100, 300, 500],
                        },
                        on: {
                          "current-change": e.currentChange,
                          "size-change": e.sizeChange,
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = a("bd86"),
        s = a("4e3c"),
        o = a("8b98"),
        n = a("511a"),
        c = a("e047"),
        d = {
          components: {
            PageContent: o["a"],
            PageSearch: s["a"],
            BssOrgTree: n["a"],
            GridCharTree: c["a"],
          },
          data: function () {
            var e;
            return {
              tableData: [],
              qryOrgType: [],
              tableList: [
                {
                  prop: "bssOrgId",
                  label: "机构ID（数据库标示）",
                  width: "150px",
                },
                { prop: "org2Name", label: "二级机构", width: "100px" },
                { prop: "org2Id", label: "二级机构ID", width: "100px" },
                { prop: "org3Name", label: "三级机构", width: "100px" },
                { prop: "org3Id", label: "三级机构ID", width: "100px" },
                { prop: "org4Name", label: "四级机构", width: "200px" },
                { prop: "org4Id", label: "四级机构ID", width: "100px" },
                { prop: "org5Name", label: "责任人" },
                { prop: "org5Id", label: "五级机构ID", width: "100px" },
                { prop: "org6Name", label: "六级机构", width: "200px" },
                { prop: "org6Id", label: "六级机构ID", width: "100px" },
                { prop: "bssOrgCode", label: "机构编码", width: "150px" },
                { prop: "bssOrgName", label: "机构名称", width: "150px" },
                { prop: "areaName", label: "营业区" },
                { prop: "regionName", label: "本地网" },
                { prop: "bssOrgTypeName", label: "机构类型", width: "150px" },
                { prop: "gridCharName", label: "行业特征", width: "300px" },
                { prop: "orgLevel", label: "机构层级" },
                { prop: "listTypeName", label: "管控标识" },
                { prop: "orgPath", label: "机构路径", width: "500px" },
              ],
              total: 0,
              tableDataLoading: !1,
              tableHeight: 400,
              formParams:
                ((e = {
                  pageNum: 1,
                  pageSize: 10,
                  bssOrgId: "",
                  isFull: !1,
                  bssOrgName: "",
                  qryOrgId: "",
                  orgLevel: "",
                  bssOrgTypeId: "",
                }),
                Object(r["a"])(e, "bssOrgId", ""),
                Object(r["a"])(e, "gridCharId", ""),
                e),
              orgObj: {
                orgId: "843000000000000",
                orgName: "",
                orgLevel: "",
                regionId: "",
              },
              selectObj: { gridCharId: "", gridCharName: "" },
            };
          },
          methods: {
            getTableData: function () {
              var e = this;
              (this.tableDataLoading = !0),
                "" == this.orgObj.orgId &&
                  (this.this.orgObj.orgId = "843000000000000"),
                (this.formParams.bssOrgId = this.orgObj.orgId),
                "" != this.selectObj.gridCharId &&
                  (this.formParams.gridCharId = this.selectObj.gridCharId);
              var t = this.formParams;
              this.$http
                .post(
                  "/hxcb/gridmanagement/salessupport/applyresion/qryOrgStruct",
                  t,
                )
                .then(function (t) {
                  t.success &&
                    ((e.total = t.data.total), (e.tableData = t.data.list)),
                    (e.tableDataLoading = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading = !1;
                });
            },
            setOrgType: function () {
              var e = this,
                t = {};
              (t.orgLevel = this.formParams.orgLevel),
                "" != t.orgLevel &&
                  void 0 != t.orgLevel &&
                  this.$http
                    .post(
                      "/hxcb/gridmanagement/salessupport/applyresion/qryOrgType",
                      t,
                    )
                    .then(function (t) {
                      t.success &&
                        ((e.qryOrgType = t.data.list),
                        (e.formParams.bssOrgTypeId = e.qryOrgType[0].cd)),
                        (e.tableDataLoading = !1);
                    })
                    .catch(function (t) {
                      e.tableDataLoading = !1;
                    });
            },
            currentChange: function (e) {
              (this.formParams.pageNum = e), this.getTableData();
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            clickCallBack: function () {
              this.formParams.bssOrgId = this.orgObj.orgId;
            },
            exportInfo: function () {
              this.$export.exportExcelPost(
                "/hxcb/gridmanagement/salessupport/applyresion/exportOrgInfo",
                this.formParams,
                "",
                "xlsx",
              );
            },
          },
        },
        p = d,
        m = a("2877"),
        h = Object(m["a"])(p, i, l, !1, null, null, null);
      t["default"] = h.exports;
    },
    "33fb": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            { staticClass: "mddzs-report-main" },
            [
              a(
                "page-search",
                [
                  a(
                    "el-form",
                    {
                      staticClass: "form-inline",
                      attrs: {
                        inline: !0,
                        model: e.formParams,
                        "label-width": "90px",
                      },
                    },
                    [
                      a(
                        "el-form-item",
                        [
                          a("self-area-tree", {
                            attrs: {
                              treeEl: "selfAreaTree",
                              mode: "1",
                              selectObj: e.areaObj,
                              size: "mini",
                              placeholder: "组织机构",
                            },
                            on: { dbClickCallBack: e.areaSelectCallBack },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: {
                              size: "mini",
                              clearable: "",
                              placeholder: "门店ID",
                            },
                            model: {
                              value: e.formParams.channelId,
                              callback: function (t) {
                                e.$set(e.formParams, "channelId", t);
                              },
                              expression: "formParams.channelId",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: {
                              size: "mini",
                              clearable: "",
                              placeholder: "门店名称",
                            },
                            model: {
                              value: e.formParams.channelName,
                              callback: function (t) {
                                e.$set(e.formParams, "channelName", t);
                              },
                              expression: "formParams.channelName",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: {
                              size: "mini",
                              clearable: "",
                              placeholder: "销售点ID",
                            },
                            model: {
                              value: e.formParams.xsId,
                              callback: function (t) {
                                e.$set(e.formParams, "xsId", t);
                              },
                              expression: "formParams.xsId",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: {
                              size: "mini",
                              clearable: "",
                              placeholder: "销售点名称",
                            },
                            model: {
                              value: e.formParams.xsName,
                              callback: function (t) {
                                e.$set(e.formParams, "xsName", t);
                              },
                              expression: "formParams.xsName",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                size: "mini",
                                type: "primary",
                                icon: "el-icon-search",
                              },
                              on: { click: e.searchInfo },
                            },
                            [e._v("查询")],
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                size: "mini",
                                type: "primary",
                                icon: "el-icon-download",
                              },
                              on: { click: e.exportInfo },
                            },
                            [e._v("导出")],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "page-content",
                [
                  a(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.tableDataLoading,
                          expression: "tableDataLoading",
                        },
                      ],
                      ref: "table",
                      staticStyle: { width: "100%" },
                      attrs: {
                        data: e.tableData,
                        "max-height": e.tableHeight,
                        size: "small",
                        stripe: "",
                        border: "",
                        "highlight-current-row": "",
                        "element-loading-text": "数据加载中，请稍后！",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background":
                          "rgba(255, 255, 255, 0.8)",
                      },
                    },
                    [
                      a("el-table-column", {
                        attrs: {
                          prop: "regionName",
                          label: "分公司",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "areaName",
                          label: "县公司",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "channelId",
                          label: "门店ID",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "channelNbr",
                          label: "门店编码",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "channelName",
                          label: "门店名称",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "name3",
                          label: "门店三级",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "name4",
                          label: "门店四级",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "xsId",
                          label: "销售点ID",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "xsNbr",
                          label: "销售点编码",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "xsName",
                          label: "销售点名称",
                          "show-overflow-tooltip": "",
                        },
                      }),
                    ],
                    1,
                  ),
                  a(
                    "div",
                    { staticClass: "block" },
                    [
                      a("el-pagination", {
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: {
                          "current-page": e.formParams.pageNum,
                          "page-sizes": [10, 30, 50, 100],
                          "page-size": e.formParams.pageSize,
                          layout: "total, sizes, prev, pager, next, jumper",
                          total: e.total,
                        },
                        on: {
                          "size-change": e.sizeChange,
                          "current-change": e.currentChange,
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              1 == e.partExportDialog.visible
                ? a("part-export", { attrs: { dialog: e.partExportDialog } })
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("3dc9"),
        s = a("61c0"),
        o = a("4852"),
        n = {
          components: { SelfAreaTree: r["a"], PartExport: o["a"] },
          data: function () {
            return {
              tableData: [],
              total: 0,
              tableDataLoading: !1,
              tableHeight: 400,
              formParams: {
                pageNum: 1,
                pageSize: 10,
                channelId: "",
                channelName: "",
                xsId: "",
                xsName: "",
                areaId: "",
              },
              areaObj: { areaId: "", areaName: "", areaLevel: "" },
              partExportDialog: {
                visible: !1,
                params: null,
                serviceName: "bssOrgManage/qryMddzsReport",
                exportService: "bssOrgManage/exportMddzsReport",
                total: 0,
                loading: !1,
              },
            };
          },
          mounted: function () {
            var e = JSON.parse(s["a"].getLocalStorage("loginJobParams"));
            (this.areaObj.areaId = e.regionId),
              (this.formParams.areaId = e.regionId),
              (this.areaObj.areaName = e.orgLevel + "." + e.bssOrgName),
              (this.areaObj.areaLevel = e.orgLevel),
              this.searchInfo();
          },
          methods: {
            searchInfo: function () {
              (this.formParams.pageNum = 1), this.getTableData();
            },
            getTableData: function () {
              var e = this;
              (this.tableDataLoading = !0),
                this.$http
                  .post("bssOrgManage/qryMddzsReport", this.formParams)
                  .then(function (t) {
                    t.success
                      ? ((e.tableData = t.data.list),
                        (e.total = t.data.total),
                        (e.tableDataLoading = !1))
                      : (e.$message({
                          showClose: !0,
                          message: "查询失败",
                          type: "error",
                        }),
                        (e.tableDataLoading = !1));
                  })
                  .catch(function (t) {
                    e.tableDataLoading = !1;
                  });
            },
            exportInfo: function () {
              (this.partExportDialog.total = this.total),
                (this.partExportDialog.visible = !0),
                (this.partExportDialog.params = this.formParams),
                0 == this.total || this.total;
            },
            areaSelectCallBack: function () {
              this.formParams.areaId = this.areaObj.areaId;
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            currentChange: function (e) {
              (this.formParams.pageNum = e), this.getTableData();
            },
          },
        },
        c = n,
        d = (a("bfe8"), a("2877")),
        p = Object(d["a"])(c, i, l, !1, null, null, null);
      t["default"] = p.exports;
    },
    "3dc9": function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "selfAreaInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          readonly: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.areaName,
                          callback: function (t) {
                            e.$set(e.selectObj, "areaName", t);
                          },
                          expression: "selectObj.areaName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "selfAreaInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "selfAreaInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("d1a6"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    "3eec": function (e, t, a) {
      e.exports = a.p + "assets/img/pdf.4b8cf15c.jpeg";
    },
    "3fea": function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62");
        function s(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : s(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "servTypeTree" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择服务类型--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          computed: o(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          beforeDestroy: function () {
            "2" == this.mode &&
              window.removeEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this,
                a = this.$storage.getLocalStorage("servTypeTree");
              "null" == a || null == a
                ? ((this.loading = !0),
                  this.getData()
                    .then(function (a) {
                      (t.zNodes = a),
                        e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                        Object(l["a"])(t.treeEl, "#servTypeInput", null, !1),
                        (t.loading = !1);
                    })
                    .catch(function (e) {
                      t.loading = !1;
                    }))
                : ((this.zNodes = JSON.parse(
                    this.$storage.getLocalStorage("servTypeTree"),
                  )),
                  e.fn.zTree.init(
                    e("#" + this.treeEl),
                    this.setting,
                    this.zNodes,
                  ),
                  Object(l["a"])(this.treeEl, "#servTypeInput", null, !1),
                  (this.loading = !1));
            },
            initStyle: function () {
              if ("1" == this.mode) {
                var t = this.$refs.servTypeInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", 1.4 * t),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.servTypeInput.$el.offsetTop -
                      175,
                  );
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#servTypeInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getServTypeTree", {})
                    .then(function (a) {
                      var i = [];
                      a.success &&
                        ((i = a.data),
                        e.$storage.setLocalStorage(
                          "servTypeTree",
                          JSON.stringify(i),
                        )),
                        t(
                          JSON.parse(
                            e.$storage.getLocalStorage("servTypeTree"),
                          ),
                        );
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (t, a) {
              for (
                var i = this.curExpandNode
                    ? this.curExpandNode.getParentNode()
                    : null,
                  l = a.parentTId ? a.getParentNode() : null,
                  r = e.fn.zTree.getZTreeObj(this.treeEl),
                  s = 0,
                  o = l ? l.children.length : 0;
                s < o;
                s++
              )
                a !== l.children[s] && r.expandNode(l.children[s], !1);
              while (i) {
                if (i === a) break;
                i = i.getParentNode();
              }
              i || this.singlePath(a);
            },
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.servTypeSortName = i.name),
                      void 0 != l.selectObj.servTypeSort &&
                        (l.selectObj.servTypeSort = i.id),
                      void 0 != l.selectObj.servTypeSortLevel &&
                        (l.selectObj.servTypeSortLevel = i.lv);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.servTypeSortName = i.name),
                  void 0 != this.selectObj.servTypeSort &&
                    (this.selectObj.servTypeSort = i.id),
                  void 0 != this.selectObj.servTypeSortLevel &&
                    (this.selectObj.servTypeSortLevel = i.lv)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.servTypeSort &&
                  (this.selectObj.servTypeSort = this.checkIdArray.toString()),
                void 0 != this.selectObj.servTypeSortName &&
                  (this.selectObj.servTypeSortName =
                    this.checkNameArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    4852: function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "part-export" },
            [
              a(
                "el-dialog",
                {
                  attrs: {
                    title: "请在下面列表中选择分批导出",
                    visible: e.dialog.visible,
                    width: "550px",
                    top: "10%",
                  },
                  on: {
                    "update:visible": function (t) {
                      return e.$set(e.dialog, "visible", t);
                    },
                  },
                },
                [
                  a(
                    "el-form",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.dialog.loading,
                          expression: "dialog.loading",
                        },
                      ],
                      ref: "form",
                      attrs: {
                        "element-loading-text": "获取记录数",
                        model: e.exportOptions.form,
                        "label-width": "140px",
                        "label-position": "left",
                      },
                    },
                    [
                      a(
                        "el-form-item",
                        { attrs: { label: "每次导出记录数：" } },
                        [
                          a(
                            "el-select",
                            {
                              staticStyle: { width: "300px" },
                              attrs: { placeholder: "请选择" },
                              on: { change: e.setExportNumOptions },
                              model: {
                                value: e.exportOptions.form.exportSize,
                                callback: function (t) {
                                  e.$set(e.exportOptions.form, "exportSize", t);
                                },
                                expression: "exportOptions.form.exportSize",
                              },
                            },
                            e._l(
                              e.exportOptions.exportSizeOptions,
                              function (e) {
                                return a("el-option", {
                                  key: e.value,
                                  attrs: { label: e.label, value: e.value },
                                });
                              },
                            ),
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        { attrs: { label: "记录范围：" } },
                        [
                          a(
                            "el-select",
                            {
                              staticStyle: { width: "300px" },
                              attrs: { placeholder: "请选择" },
                              model: {
                                value: e.exportOptions.form.exportNum,
                                callback: function (t) {
                                  e.$set(e.exportOptions.form, "exportNum", t);
                                },
                                expression: "exportOptions.form.exportNum",
                              },
                            },
                            e._l(
                              e.exportOptions.exportNumOptions,
                              function (e) {
                                return a("el-option", {
                                  key: e.value,
                                  attrs: { label: e.label, value: e.value },
                                });
                              },
                            ),
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  a(
                    "span",
                    {
                      staticClass: "dialog-footer",
                      attrs: { slot: "footer" },
                      slot: "footer",
                    },
                    [
                      a(
                        "el-button",
                        {
                          on: {
                            click: function (t) {
                              e.dialog.visible = !1;
                            },
                          },
                        },
                        [e._v("取 消")],
                      ),
                      a(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function (t) {
                              return e.exportInfo();
                            },
                          },
                        },
                        [e._v("确 定")],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = {
          props: { dialog: Object },
          data: function () {
            return {
              exportOptions: {
                exportSizeOptions: [
                  { value: 3e3, label: "3000条" },
                  { value: 5e3, label: "5000条" },
                  { value: 1e4, label: "10000条" },
                  { value: 2e4, label: "20000条" },
                ],
                exportNumOptions: [],
                form: { exportSize: 1e4, exportNum: "" },
              },
            };
          },
          mounted: function () {
            this.exportPrepare();
          },
          methods: {
            exportPrepare: function () {
              var e = this;
              0 == this.dialog.total || "" == this.dialog.total
                ? this.$http
                    .post(this.dialog.serviceName, this.dialog.params)
                    .then(function (t) {
                      t.success &&
                        ((e.dialog.total = t.data.total),
                        e.setExportNumOptions(),
                        (e.dialog.loading = !1));
                    })
                    .catch(function (e) {})
                : this.setExportNumOptions();
            },
            setExportNumOptions: function () {
              (this.exportOptions.exportNumOptions = []),
                (this.exportOptions.form.exportNum = 1);
              for (
                var e = this.dialog.total,
                  t = this.exportOptions.form.exportSize,
                  a = e / t + 1,
                  i = 1;
                i < a;
                i++
              ) {
                var l = (i - 1) * t + 1,
                  r = i * t > e ? e : i * t;
                this.exportOptions.exportNumOptions.push({
                  value: i,
                  label: "导出从第 [" + l + "] 到第 [" + r + "] 条记录",
                });
              }
              this.exportOptions.exportNum = 1;
            },
            exportInfo: function (e) {
              var t = "";
              this.dialog.title && (t = this.dialog.title);
              var a = "";
              a = this.dialog.excelType ? this.dialog.excelType : "xlsx";
              var i = JSON.parse(JSON.stringify(this.dialog.params));
              (i.serviceName =
                "" != i.serviceName && i.serviceName
                  ? i.serviceName
                  : this.dialog.serviceName),
                (i.pageNum = this.exportOptions.form.exportNum),
                (i.pageSize = this.exportOptions.form.exportSize),
                this.$export.exportExcelPost(
                  this.dialog.exportService,
                  i,
                  t,
                  a,
                );
            },
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    "49be": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "page-search",
                [
                  a(
                    "el-form",
                    { ref: "form", attrs: { inline: !0 } },
                    [
                      a(
                        "el-row",
                        [
                          a(
                            "el-col",
                            { attrs: { span: 6 } },
                            [
                              a(
                                "el-form-item",
                                { attrs: { prop: "areaId" } },
                                [
                                  a("self-area-tree", {
                                    attrs: {
                                      treeEl: "qryAreaTree",
                                      mode: "1",
                                      selectObj: e.areaObj,
                                      size: "mini",
                                      placeholder: "请选择地域",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-col",
                            { attrs: { span: 6 } },
                            [
                              a(
                                "el-form-item",
                                { attrs: { prop: "addressId" } },
                                [
                                  a("el-input", {
                                    attrs: {
                                      placeholder: "地址ID",
                                      size: "mini",
                                      clearable: "",
                                    },
                                    model: {
                                      value: e.formParams.querySegmId,
                                      callback: function (t) {
                                        e.$set(e.formParams, "querySegmId", t);
                                      },
                                      expression: "formParams.querySegmId",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-col",
                            { attrs: { span: 6 } },
                            [
                              a(
                                "el-form-item",
                                { attrs: { prop: "addressLeve" } },
                                [
                                  a(
                                    "el-select",
                                    {
                                      attrs: {
                                        size: "mini",
                                        placeholder: "地址层级",
                                      },
                                      model: {
                                        value: e.formParams.querySegmLeve,
                                        callback: function (t) {
                                          e.$set(
                                            e.formParams,
                                            "querySegmLeve",
                                            t,
                                          );
                                        },
                                        expression: "formParams.querySegmLeve",
                                      },
                                    },
                                    e._l(e.isProvince, function (e, t) {
                                      return a("el-option", {
                                        key: e,
                                        attrs: { label: e, value: t },
                                      });
                                    }),
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-col",
                            { attrs: { span: 6 } },
                            [
                              a(
                                "el-form-item",
                                { attrs: { prop: "addressName" } },
                                [
                                  a("el-input", {
                                    attrs: {
                                      placeholder: "地址名称",
                                      size: "mini",
                                      clearable: "",
                                    },
                                    model: {
                                      value: e.formParams.querySegmName,
                                      callback: function (t) {
                                        e.$set(
                                          e.formParams,
                                          "querySegmName",
                                          t,
                                        );
                                      },
                                      expression: "formParams.querySegmName",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-row",
                        [
                          a(
                            "el-col",
                            { attrs: { span: 6 } },
                            [
                              a(
                                "el-form-item",
                                { attrs: { prop: "dorgName" } },
                                [
                                  a("el-input", {
                                    attrs: {
                                      placeholder: "网格名称",
                                      size: "mini",
                                      clearable: "",
                                    },
                                    model: {
                                      value: e.formParams.querydorgName,
                                      callback: function (t) {
                                        e.$set(
                                          e.formParams,
                                          "querydorgName",
                                          t,
                                        );
                                      },
                                      expression: "formParams.querydorgName",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-col",
                            { attrs: { span: 6 } },
                            [
                              a(
                                "el-form-item",
                                { attrs: { prop: "isCont" } },
                                [
                                  a(
                                    "el-select",
                                    {
                                      attrs: {
                                        size: "mini",
                                        placeholder: "是否认领",
                                        clearable: "",
                                      },
                                      model: {
                                        value: e.formParams.condTdright,
                                        callback: function (t) {
                                          e.$set(
                                            e.formParams,
                                            "condTdright",
                                            t,
                                          );
                                        },
                                        expression: "formParams.condTdright",
                                      },
                                    },
                                    [
                                      a("el-option", {
                                        attrs: { label: "全部", value: "" },
                                      }),
                                      a("el-option", {
                                        attrs: { label: "已认领", value: "2" },
                                      }),
                                      a("el-option", {
                                        attrs: { label: "未认领", value: "1" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-col",
                            { attrs: { span: 12 } },
                            [
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-form-item",
                                    [
                                      a(
                                        "el-button",
                                        {
                                          attrs: {
                                            size: "mini",
                                            type: "primary",
                                            icon: "el-icon-search",
                                          },
                                          on: { click: e.selectLeft },
                                        },
                                        [e._v("查询")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-form-item",
                                    [
                                      a(
                                        "el-button",
                                        {
                                          attrs: {
                                            size: "mini",
                                            type: "primary",
                                          },
                                          on: { click: e.reSetLeft },
                                        },
                                        [e._v("重置")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-form-item",
                                    [
                                      a(
                                        "el-button",
                                        {
                                          attrs: {
                                            size: "mini",
                                            type: "primary",
                                          },
                                          on: { click: e.unSave },
                                        },
                                        [e._v("解绑")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-form-item",
                                    [
                                      a(
                                        "el-button",
                                        {
                                          attrs: {
                                            size: "mini",
                                            type: "success",
                                          },
                                          on: { click: e.exportInfo },
                                        },
                                        [e._v("导出")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "page-content",
                [
                  a(
                    "el-row",
                    { staticStyle: { position: "inherit" } },
                    [
                      a(
                        "el-col",
                        { attrs: { span: 11 } },
                        [
                          a("el-tag", { attrs: { size: "mini" } }, [
                            e._v("标准地址列表"),
                          ]),
                          a(
                            "el-table",
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: e.tableDataLoading,
                                  expression: "tableDataLoading",
                                },
                              ],
                              ref: "table",
                              staticStyle: { width: "100%" },
                              attrs: {
                                data: e.tableData,
                                height: e.tableHeight,
                                size: "small",
                                stripe: "",
                                border: "",
                                "highlight-current-row": "",
                                "element-loading-text": "数据加载中，请稍后！",
                                "element-loading-spinner": "el-icon-loading",
                                "element-loading-background":
                                  "rgba(255, 255, 255, 0.8)",
                              },
                              on: {
                                "selection-change": e.handleSelectionChange,
                              },
                            },
                            [
                              a("el-table-column", {
                                attrs: {
                                  type: "index",
                                  fixed: "",
                                  width: "30",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  type: "selection",
                                  fixed: "",
                                  width: "50",
                                },
                              }),
                              e._l(e.tableList, function (e) {
                                return a("el-table-column", {
                                  attrs: {
                                    prop: e.prop,
                                    label: e.label,
                                    width: e.width,
                                    align: "center",
                                  },
                                });
                              }),
                            ],
                            2,
                          ),
                          a(
                            "div",
                            { staticStyle: { "text-align": "center" } },
                            [
                              a("el-pagination", {
                                attrs: {
                                  background: "",
                                  layout: "prev, pager, next",
                                  total: e.total,
                                  "page-size": e.pageSize,
                                  "current-page": e.currentPage,
                                },
                                on: {
                                  "next-click": e.changeCurrent,
                                  "prev-click": e.changeCurrent,
                                  "current-change": e.changeCurrent,
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-col",
                        { attrs: { span: 2 } },
                        [
                          a(
                            "el-button",
                            {
                              staticStyle: {
                                "margin-top": "200%",
                                "margin-left": "17%",
                              },
                              attrs: { type: "info", plain: "" },
                              on: { click: e.save },
                            },
                            [e._v("映射")],
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-col",
                        { attrs: { span: 11 } },
                        [
                          a("el-tag", { attrs: { size: "mini" } }, [
                            e._v("7级网格列表"),
                          ]),
                          a(
                            "el-form",
                            { ref: "inform", attrs: { inline: !0 } },
                            [
                              a(
                                "el-row",
                                [
                                  a(
                                    "el-col",
                                    { attrs: { span: 6 } },
                                    [
                                      a(
                                        "el-form-item",
                                        [
                                          a("self-org-tree", {
                                            ref: "selfOrgTree",
                                            attrs: {
                                              mode: "1",
                                              selectObj: e.orgObj,
                                              size: "mini",
                                              placeholder: "组织机构",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-col",
                                    { attrs: { span: 5 } },
                                    [
                                      a(
                                        "el-form-item",
                                        [
                                          a(
                                            "el-select",
                                            {
                                              attrs: {
                                                size: "mini",
                                                placeholder: "类型",
                                              },
                                              model: {
                                                value: e.formParams.addressId,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.formParams,
                                                    "addressId",
                                                    t,
                                                  );
                                                },
                                                expression:
                                                  "formParams.addressId",
                                              },
                                            },
                                            e._l(
                                              e.isAddressId,
                                              function (e, t) {
                                                return a("el-option", {
                                                  key: e,
                                                  attrs: { label: e, value: t },
                                                });
                                              },
                                            ),
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-col",
                                    { attrs: { span: 5 } },
                                    [
                                      a(
                                        "el-form-item",
                                        [
                                          a("el-input", {
                                            attrs: {
                                              placeholder: "网格名称",
                                              size: "mini",
                                              clearable: "",
                                            },
                                            model: {
                                              value: e.formParams.orgName,
                                              callback: function (t) {
                                                e.$set(
                                                  e.formParams,
                                                  "orgName",
                                                  t,
                                                );
                                              },
                                              expression: "formParams.orgName",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-col",
                                    { attrs: { span: 4 } },
                                    [
                                      a(
                                        "el-form-item",
                                        [
                                          a(
                                            "el-button",
                                            {
                                              attrs: {
                                                size: "mini",
                                                type: "primary",
                                                icon: "el-icon-search",
                                              },
                                              on: { click: e.selectRight },
                                            },
                                            [e._v("查询")],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-col",
                                    { attrs: { span: 4 } },
                                    [
                                      a(
                                        "el-form-item",
                                        [
                                          a(
                                            "el-button",
                                            {
                                              attrs: {
                                                size: "mini",
                                                type: "primary",
                                                icon: "el-icon-search",
                                              },
                                              on: { click: e.reSetRight },
                                            },
                                            [e._v("重置")],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-table",
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: e.tableDataLoading1,
                                  expression: "tableDataLoading1",
                                },
                              ],
                              ref: "table1",
                              staticStyle: { width: "100%" },
                              attrs: {
                                data: e.tableData1,
                                height: e.tableHeight1,
                                size: "small",
                                stripe: "",
                                border: "",
                                "highlight-current-row": "",
                                "element-loading-text": "数据加载中，请稍后！",
                                "element-loading-spinner": "el-icon-loading",
                                "element-loading-background":
                                  "rgba(255, 255, 255, 0.8)",
                              },
                              on: {
                                "selection-change": e.handleSelectionChange1,
                              },
                            },
                            [
                              a("el-table-column", {
                                attrs: {
                                  type: "index",
                                  width: "55",
                                  fixed: "",
                                },
                              }),
                              a("el-table-column", {
                                attrs: {
                                  type: "selection",
                                  width: "50",
                                  fixed: "",
                                },
                              }),
                              e._l(e.tableList1, function (e) {
                                return a("el-table-column", {
                                  attrs: {
                                    prop: e.prop,
                                    label: e.label,
                                    width: e.width,
                                    align: "center",
                                  },
                                });
                              }),
                            ],
                            2,
                          ),
                          a(
                            "div",
                            { staticStyle: { "text-align": "center" } },
                            [
                              a("el-pagination", {
                                attrs: {
                                  background: "",
                                  layout: "prev, pager, next",
                                  total: e.total1,
                                  "page-size": e.pageSize1,
                                  "current-page": e.currentPage1,
                                },
                                on: {
                                  "next-click": e.changeCurrent1,
                                  "prev-click": e.changeCurrent1,
                                  "current-change": e.changeCurrent1,
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = a("511a"),
        s = a("3dc9"),
        o = {
          components: { selfAreaTree: s["a"], selfOrgTree: r["a"] },
          data: function () {
            return {
              isProvince: {
                "": "全部",
                180006: "六级",
                180007: "七级",
                180008: "八级",
                180009: "九级",
              },
              isAddressId: {
                "": "全部",
                1: "公众小区",
                2: "行政村、集镇",
                7: "商客规模类",
                16: "行业客户",
                6: "高校",
                17: "中小学",
                SK001: "工业园区",
                SK006: "商务楼宇",
                SK010: "专业市场",
              },
              tableData: [],
              tableData1: [],
              tableList: [
                { prop: "orgId", label: "网格ID" },
                { prop: "bename", label: "绑定网格名称", width: 200 },
                { prop: "segmId", label: "标准实例认领地址ID", width: 200 },
                { prop: "xqSegmId", label: "空间库认领地址ID", width: 200 },
                { prop: "rlgz", label: "绑定规则" },
                { prop: "segmType", label: "地址层级" },
                { prop: "standName", label: "地址全称", width: 400 },
                { prop: "staffName", label: "认领人" },
                { prop: "impDate", label: "认领时间" },
              ],
              tableList1: [
                { prop: "orgId", label: "网格ID", width: 200 },
                { prop: "orgName", label: "网格名称", width: 300 },
                { prop: "gridCharName", label: "行业特征", width: 300 },
                { prop: "wglj", label: "网格路径", width: 800 },
              ],
              total: 0,
              total1: 0,
              currentPage: 1,
              currentPage1: 1,
              pageSize: 10,
              pageSize1: 10,
              tableDataLoading: !1,
              tableDataLoading1: !1,
              selection: [],
              selection1: [],
              tableHeight: 400,
              tableHeight1: 385,
              formParams: {
                areaId: "",
                querySegmId: "",
                querydorgName: "",
                querySegmName: "",
                querySegmLeve: "",
                condTdright: "",
                addressId: "",
                orgName: "",
              },
              orgObj: { orgId: "", orgName: "", orgLevel: "", regionId: "" },
              areaObj: { areaId: "", areaName: "", areaLevel: "" },
            };
          },
          methods: {
            save: function () {
              var e = this.$refs.table.selection.length,
                t = this.$refs.table1.selection.length;
              if (1 == e && 1 == t)
                if (
                  null == this.$refs.table.selection[0].bename ||
                  null == this.$refs.table.selection[0].orgId
                ) {
                  var a = {
                      pageNum: this.currentPage,
                      pageSize: this.pageSize,
                      bssOrgId: this.$refs.table1.selection[0].orgId,
                      opeValue: this.$refs.table.selection[0].segmId,
                    },
                    i =
                      "/hxcb/gridmanagement/custclaimmanage/addressEntry/save";
                  this.getTableData(a, i), this.selectLeft();
                } else
                  this.$message({
                    type: "error",
                    message: "请对当前标准地址列表数据进行解除绑定",
                  });
              else
                this.$message({
                  type: "error",
                  message: "请在标准地址列表和7级网格列表各选择一条记录",
                });
            },
            unSave: function () {
              var e = this.$refs.table.selection.length;
              if (1 == e)
                if (
                  null != this.$refs.table.selection[0].orgId ||
                  null != this.$refs.table.selection[0].bename
                ) {
                  var t = {
                      pageNum: this.currentPage,
                      pageSize: this.pageSize,
                      bssOrgId: this.$refs.table.selection[0].orgId,
                      opeValue: this.$refs.table.selection[0].segmId,
                    },
                    a =
                      "/hxcb/gridmanagement/custclaimmanage/addressEntry/delete";
                  this.getTableData(t, a), this.selectLeft();
                } else
                  this.$message({
                    type: "error",
                    message: "该数据未曾绑定,请先进行绑定",
                  });
              else
                this.$message({
                  type: "error",
                  message: "请在标准地址列表选择一条记录",
                });
            },
            reSetLeft: function () {
              (this.areaObj.areaId = void 0),
                (this.areaObj.areaLevel = void 0),
                (this.areaObj.areaName = void 0),
                (this.formParams.querySegmId = void 0),
                (this.formParams.querydorgName = void 0),
                (this.formParams.querySegmLeve = void 0),
                (this.formParams.querySegmName = void 0),
                (this.formParams.condTdright = void 0);
            },
            reSetRight: function () {
              (this.orgObj.orgName = void 0),
                (this.orgObj.orgLevel = void 0),
                (this.orgObj.orgId = void 0),
                (this.orgObj.regionId = void 0),
                (this.formParams.addressId = void 0),
                (this.formParams.orgName = void 0);
            },
            selectLeft: function () {
              if (
                2 == this.formParams.condTdright ||
                "" === this.formParams.querydorgName
              ) {
                var e = {
                    pageNum: this.currentPage,
                    pageSize: this.pageSize,
                    areaId: this.areaObj.areaId,
                    querySegmId: this.formParams.querySegmId,
                    querydorgName: this.formParams.querydorgName,
                    querySegmName: this.formParams.querySegmName,
                    querySegmLeve: this.formParams.querySegmLeve,
                    condTdright: this.formParams.condTdright,
                  },
                  t =
                    "/hxcb/gridmanagement/custclaimmanage/addressEntry/qryInfoAddress";
                this.getTableData(e, t);
              } else
                this.$message({ type: "error", message: "请选择已认领条件" });
            },
            selectRight: function () {
              var e = {
                  pageNum: this.currentPage1,
                  pageSize: this.pageSize1,
                  myOrgId: this.orgObj.orgId,
                  queryBssorg: this.formParams.addressId,
                  queryOrgName: this.formParams.orgName,
                },
                t =
                  "/hxcb/gridmanagement/custclaimmanage/addressEntry/qryInfoGridList";
              this.getTableData5(e, t);
            },
            changeCurrent: function (e) {
              (this.currentPage = e), this.getTableData();
            },
            changeCurrent1: function (e) {
              (this.currentPage = e), this.getTableData1();
            },
            exportInfo: function () {
              if (
                2 == this.formParams.condTdright ||
                "" == this.formParams.querydorgName
              ) {
                var e = {
                  pageNum: this.currentPage,
                  pageSize: this.pageSize,
                  areaId: this.areaObj.areaId,
                  querySegmId: this.formParams.areaId,
                  querydorgName: this.formParams.querydorgName,
                  querySegmName: this.formParams.querySegmName,
                  querySegmLeve: this.formParams.querySegmLeve,
                  condTdright: this.formParams.condTdright,
                };
                this.$export.exportExcelPost(
                  "hxcb/gridmanagement/custclaimmanage/addressEntry/qryInfoAddress",
                  e,
                  "标准地址列表导出",
                  "xlsx",
                );
              } else
                this.$message({ type: "error", message: "请选择已认领条件" });
            },
            getTableData5: function (e, t) {
              var a = this;
              (this.tableDataLoading1 = !0),
                this.$http
                  .post(t, e)
                  .then(function (e) {
                    e.success &&
                      ((a.total1 = e.data.total), (a.tableData1 = e.data.list)),
                      (a.tableDataLoading1 = !1);
                  })
                  .catch(function (e) {
                    a.tableDataLoading1 = !1;
                  });
            },
            getTableData: function (e, t) {
              var a = this;
              (this.tableDataLoading = !0),
                this.$http
                  .post(t, e)
                  .then(function (e) {
                    e.success &&
                      ((a.total1 = e.data.total), (a.tableData = e.data.list)),
                      (a.tableDataLoading = !1);
                  })
                  .catch(function (e) {
                    a.tableDataLoading = !1;
                  });
            },
            handleSelectionChange: function (e) {
              this.selection = e;
            },
            handleSelectionChange1: function (e) {
              this.selection1 = e;
            },
            currentChange: function (e) {
              e > this.total / this.formParams.pageSize ||
                ((this.formParams.pageNum = e), this.getTableData());
            },
            currentChange1: function (e) {
              e > this.total1 / this.formParams.pageSize1 ||
                ((this.formParams.pageNum1 = e), this.getTableData1());
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            sizeChange1: function (e) {
              (this.formParams.pageSize1 = e), this.getTableData1();
            },
          },
          created: function () {
            this.selectLeft(), this.selectRight();
          },
        },
        n = o,
        c = a("2877"),
        d = Object(c["a"])(n, i, l, !1, null, null, null);
      t["default"] = d.exports;
    },
    "4b4b": function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      e.showPath
                        ? a("el-input", {
                            ref: "bssOrgInput",
                            attrs: {
                              slot: "reference",
                              placeholder: e.placeholder,
                              size: e.size,
                              className: e.className,
                              readonly: "",
                            },
                            slot: "reference",
                            model: {
                              value: e.selectObj.orgPath,
                              callback: function (t) {
                                e.$set(e.selectObj, "orgPath", t);
                              },
                              expression: "selectObj.orgPath",
                            },
                          })
                        : a("el-input", {
                            ref: "bssOrgInput",
                            attrs: {
                              slot: "reference",
                              placeholder: e.placeholder,
                              size: e.size,
                              className: e.className,
                              readonly: "",
                            },
                            slot: "reference",
                            model: {
                              value: e.selectObj.orgName,
                              callback: function (t) {
                                e.$set(e.selectObj, "orgName", t);
                              },
                              expression: "selectObj.orgName",
                            },
                          }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "bssOrgInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "bssOrgInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                          a(
                            "div",
                            { attrs: { id: "oper_panel" } },
                            [e._t("default")],
                            2,
                          ),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("df07"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    "511a": function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "selfOrgInput",
                        staticStyle: { width: "auto" },
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          readonly: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.orgName,
                          callback: function (t) {
                            e.$set(e.selectObj, "orgName", t);
                          },
                          expression: "selectObj.orgName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "selfOrgInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "selfOrgInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                          a(
                            "div",
                            { attrs: { id: "oper_panel" } },
                            [e._t("default")],
                            2,
                          ),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("5435"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    5435: function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62"),
          s = a("13f4");
        function o(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function n(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : o(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "selfOrgTreeDemo" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择组织机构--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                async: {
                  enable: !0,
                  contentType: "application/json;charset=utf-8",
                  url: s["a"].BASE_URL + "org/getSelfOrgTree",
                  headers: {},
                  autoParam: ["id=parentOrgId"],
                  dataFilter: this.filter,
                },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          created: function () {
            this.setting.async.headers = {
              Authorization: "Bearer " + this.token,
            };
          },
          computed: n(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          beforeDestroy: function () {
            "2" == this.mode &&
              window.removeEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this;
              (this.loading = !0),
                this.getData()
                  .then(function (a) {
                    (t.zNodes = a),
                      e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                      Object(l["a"])(t.treeEl, "#selfOrgInput", null, !1),
                      (t.loading = !1);
                  })
                  .catch(function (e) {
                    t.loading = !1;
                  });
            },
            initStyle: function () {
              if ("1" == this.mode) {
                this.$refs.selfOrgInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", "auto"),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  (e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.selfOrgInput.$el.offsetTop -
                      175,
                  ),
                  e("#oper_panel").css({
                    height: "40%",
                    position: "absolute",
                    bottom: "1px",
                    width: "99%",
                    "z-index": "999",
                    background: "white",
                    "border-top": "#ebeff5 solid 1px",
                  }));
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#selfOrgInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getSelfOrgTree", {})
                    .then(function (e) {
                      var a = [];
                      e.success && (a = e.data), t(a);
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (t, a) {
              for (
                var i = this.curExpandNode
                    ? this.curExpandNode.getParentNode()
                    : null,
                  l = a.parentTId ? a.getParentNode() : null,
                  r = e.fn.zTree.getZTreeObj(this.treeEl),
                  s = 0,
                  o = l ? l.children.length : 0;
                s < o;
                s++
              )
                a !== l.children[s] && r.expandNode(l.children[s], !1);
              while (i) {
                if (i === a) break;
                i = i.getParentNode();
              }
              i || this.singlePath(a);
            },
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.orgName = i.name),
                      void 0 != l.selectObj.orgId && (l.selectObj.orgId = i.id),
                      void 0 != l.selectObj.orgLevel &&
                        (l.selectObj.orgLevel = i.lv),
                      void 0 != l.selectObj.regionId &&
                        (l.selectObj.regionId = i.regionId);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.orgName = i.name),
                  void 0 != this.selectObj.orgId &&
                    (this.selectObj.orgId = i.id),
                  void 0 != this.selectObj.orgLevel &&
                    (this.selectObj.orgLevel = i.lv),
                  void 0 != this.selectObj.regionId &&
                    (this.selectObj.regionId = i.regionId)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.orgId &&
                  (this.selectObj.orgId = this.checkIdArray.toString()),
                void 0 != this.selectObj.orgName &&
                  (this.selectObj.orgName = this.checkNameArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    5505: function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "servTypeInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          readonly: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.servTypeSortName,
                          callback: function (t) {
                            e.$set(e.selectObj, "servTypeSortName", t);
                          },
                          expression: "selectObj.servTypeSortName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "servTypeInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "servTypeInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("3fea"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    "5da9": function (e, t, a) {
      "use strict";
      var i = a("250f"),
        l = a.n(i);
      l.a;
    },
    "5f9b": function (e, t, a) {
      "use strict";
      var i = a("bfd1"),
        l = a.n(i);
      l.a;
    },
    "69ee": function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62"),
          s = a("13f4");
        function o(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function n(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : o(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "selfOrgTreeAll" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择组织机构--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              checkRegionIdArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                async: {
                  enable: !0,
                  contentType: "application/json;charset=utf-8",
                  url: s["a"].BASE_URL + "org/getSelfOrgTreeAll",
                  headers: {},
                  autoParam: ["id=parentOrgId"],
                  dataFilter: this.filter,
                },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          created: function () {
            this.setting.async.headers = {
              Authorization: "Bearer " + this.token,
            };
          },
          computed: n(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          beforeDestroy: function () {
            "2" == this.mode &&
              window.removeEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this;
              (this.loading = !0),
                this.getData()
                  .then(function (a) {
                    (t.zNodes = a),
                      e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                      Object(l["a"])(t.treeEl, "#selfOrgInput", null, !1),
                      (t.loading = !1);
                  })
                  .catch(function (e) {
                    t.loading = !1;
                  });
            },
            initStyle: function () {
              if ("1" == this.mode) {
                this.$refs.selfOrgInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", "auto"),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.selfOrgInput.$el.offsetTop -
                      175,
                  );
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#selfOrgInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getSelfOrgTreeAll", {})
                    .then(function (e) {
                      var a = [];
                      e.success && (a = e.data), t(a);
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (t, a) {
              for (
                var i = this.curExpandNode
                    ? this.curExpandNode.getParentNode()
                    : null,
                  l = a.parentTId ? a.getParentNode() : null,
                  r = e.fn.zTree.getZTreeObj(this.treeEl),
                  s = 0,
                  o = l ? l.children.length : 0;
                s < o;
                s++
              )
                a !== l.children[s] && r.expandNode(l.children[s], !1);
              while (i) {
                if (i === a) break;
                i = i.getParentNode();
              }
              i || this.singlePath(a);
            },
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.orgName = i.name),
                      void 0 != l.selectObj.orgId && (l.selectObj.orgId = i.id),
                      void 0 != l.selectObj.orgCode &&
                        (l.selectObj.orgCode = i.code),
                      void 0 != l.selectObj.orgLevel &&
                        (l.selectObj.orgLevel = i.lv),
                      void 0 != l.selectObj.regionId &&
                        (l.selectObj.regionId = i.regionId),
                      void 0 != l.selectObj.areaId &&
                        (l.selectObj.areaId = i.areaId),
                      void 0 != l.selectObj.orgTypeId &&
                        (l.selectObj.orgTypeId = i.orgTypeCd),
                      void 0 != l.selectObj.code && (l.selectObj.code = i.code);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.orgName = i.name),
                  void 0 != this.selectObj.orgId &&
                    (this.selectObj.orgId = i.id),
                  void 0 != this.selectObj.orgCode &&
                    (this.selectObj.orgCode = i.code),
                  void 0 != this.selectObj.orgLevel &&
                    (this.selectObj.orgLevel = i.lv),
                  void 0 != this.selectObj.regionId &&
                    (this.selectObj.regionId = i.regionId),
                  void 0 != this.selectObj.areaId &&
                    (this.selectObj.areaId = i.areaId),
                  void 0 != this.selectObj.orgTypeId &&
                    (this.selectObj.orgTypeId = i.orgTypeCd),
                  void 0 != this.selectObj.code &&
                    (this.selectObj.code = i.code)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name),
                  this.checkRegionIdArray.push(a.regionId))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1),
                      i.checkRegionIdArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.orgId &&
                  (this.selectObj.orgId = this.checkIdArray.toString()),
                void 0 != this.selectObj.orgName &&
                  (this.selectObj.orgName = this.checkNameArray.toString()),
                void 0 != this.selectObj.regionId &&
                  (this.selectObj.regionId =
                    this.checkRegionIdArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    "6c4a": function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62"),
          s = a("13f4");
        function o(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function n(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : o(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "selfOrgTreeAll" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择组织机构--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              checkRegionIdArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                async: {
                  enable: !0,
                  contentType: "application/json;charset=utf-8",
                  url: s["a"].BASE_URL + "org/getSelfOrgTreeAllNew",
                  headers: {},
                  autoParam: ["id=parentOrgId"],
                  dataFilter: this.filter,
                },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          created: function () {
            this.setting.async.headers = {
              Authorization: "Bearer " + this.token,
            };
          },
          computed: n(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          beforeDestroy: function () {
            "2" == this.mode &&
              window.removeEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this;
              (this.loading = !0),
                this.getData()
                  .then(function (a) {
                    (t.zNodes = a),
                      e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                      Object(l["a"])(t.treeEl, "#selfOrgInput", null, !1),
                      (t.loading = !1);
                  })
                  .catch(function (e) {
                    t.loading = !1;
                  });
            },
            initStyle: function () {
              if ("1" == this.mode) {
                this.$refs.selfOrgInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", "auto"),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.selfOrgInput.$el.offsetTop -
                      175,
                  );
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#selfOrgInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getSelfOrgTreeAllNew", {})
                    .then(function (e) {
                      var a = [];
                      e.success && (a = e.data), t(a);
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (e, t) {},
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.orgName = i.name),
                      void 0 != l.selectObj.orgId && (l.selectObj.orgId = i.id),
                      void 0 != l.selectObj.orgCode &&
                        (l.selectObj.orgCode = i.code),
                      void 0 != l.selectObj.orgLevel &&
                        (l.selectObj.orgLevel = i.lv),
                      void 0 != l.selectObj.regionId &&
                        (l.selectObj.regionId = i.regionId),
                      void 0 != l.selectObj.areaId &&
                        (l.selectObj.areaId = i.areaId),
                      void 0 != l.selectObj.orgTypeId &&
                        (l.selectObj.orgTypeId = i.orgTypeCd),
                      void 0 != l.selectObj.code && (l.selectObj.code = i.code);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.orgName = i.name),
                  void 0 != this.selectObj.orgId &&
                    (this.selectObj.orgId = i.id),
                  void 0 != this.selectObj.orgCode &&
                    (this.selectObj.orgCode = i.code),
                  void 0 != this.selectObj.orgLevel &&
                    (this.selectObj.orgLevel = i.lv),
                  void 0 != this.selectObj.regionId &&
                    (this.selectObj.regionId = i.regionId),
                  void 0 != this.selectObj.areaId &&
                    (this.selectObj.areaId = i.areaId),
                  void 0 != this.selectObj.orgTypeId &&
                    (this.selectObj.orgTypeId = i.orgTypeCd),
                  void 0 != this.selectObj.code &&
                    (this.selectObj.code = i.code)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name),
                  this.checkRegionIdArray.push(a.regionId))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1),
                      i.checkRegionIdArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.orgId &&
                  (this.selectObj.orgId = this.checkIdArray.toString()),
                void 0 != this.selectObj.orgName &&
                  (this.selectObj.orgName = this.checkNameArray.toString()),
                void 0 != this.selectObj.regionId &&
                  (this.selectObj.regionId =
                    this.checkRegionIdArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    7268: function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62");
        function s(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : s(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "gridCharTree" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择服务类型--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
            upValue: { type: String, default: "" },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          computed: o(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          beforeDestroy: function () {
            "2" == this.mode &&
              window.removeEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this,
                a = null;
              ("" != this.upValue && null != this.upValue) ||
                (a = this.$storage.getLocalStorage("gridCharTree")),
                "null" == a || null == a
                  ? ((this.loading = !0),
                    this.getData()
                      .then(function (a) {
                        (t.zNodes = a),
                          e.fn.zTree.init(
                            e("#" + t.treeEl),
                            t.setting,
                            t.zNodes,
                          ),
                          Object(l["a"])(t.treeEl, "#gridCharInput", null, !1),
                          (t.loading = !1);
                      })
                      .catch(function (e) {
                        t.loading = !1;
                      }))
                  : ((this.zNodes = JSON.parse(
                      this.$storage.getLocalStorage("gridCharTree"),
                    )),
                    e.fn.zTree.init(
                      e("#" + this.treeEl),
                      this.setting,
                      this.zNodes,
                    ),
                    Object(l["a"])(this.treeEl, "#gridCharInput", null, !1));
            },
            initStyle: function () {
              if ("1" == this.mode) {
                var t = this.$refs.gridCharInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", 1.4 * t),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.gridCharInput.$el.offsetTop -
                      175,
                  );
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#gridCharInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getGridCharTree", { upValue: e.upValue })
                    .then(function (a) {
                      var i = [];
                      a.success &&
                        ((i = a.data),
                        e.$storage.setLocalStorage(
                          "gridCharTree",
                          JSON.stringify(i),
                        )),
                        t(
                          JSON.parse(
                            e.$storage.getLocalStorage("gridCharTree"),
                          ),
                        );
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (t, a) {
              for (
                var i = this.curExpandNode
                    ? this.curExpandNode.getParentNode()
                    : null,
                  l = a.parentTId ? a.getParentNode() : null,
                  r = e.fn.zTree.getZTreeObj(this.treeEl),
                  s = 0,
                  o = l ? l.children.length : 0;
                s < o;
                s++
              )
                a !== l.children[s] && r.expandNode(l.children[s], !1);
              while (i) {
                if (i === a) break;
                i = i.getParentNode();
              }
              i || this.singlePath(a);
            },
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.gridCharName = i.name),
                      void 0 != l.selectObj.gridCharId &&
                        (l.selectObj.gridCharId = i.id);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.gridCharName = i.name),
                  void 0 != this.selectObj.gridCharId &&
                    (this.selectObj.gridCharId = i.id)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.gridCharId &&
                  (this.selectObj.gridCharId = this.checkIdArray.toString()),
                void 0 != this.selectObj.gridCharName &&
                  (this.selectObj.gridCharName =
                    this.checkNameArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    7336: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "el-row",
                { staticStyle: { position: "inherit" } },
                [
                  a(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      a(
                        "page-search",
                        [
                          a(
                            "el-form",
                            [
                              a(
                                "el-form-item",
                                [
                                  a(
                                    "el-radio-group",
                                    {
                                      attrs: { size: "small" },
                                      model: {
                                        value: e.isTree,
                                        callback: function (t) {
                                          e.isTree = t;
                                        },
                                        expression: "isTree",
                                      },
                                    },
                                    [
                                      a(
                                        "el-radio-button",
                                        { attrs: { label: !0 } },
                                        [e._v("机构树")],
                                      ),
                                      a(
                                        "el-radio-button",
                                        { attrs: { label: !1 } },
                                        [e._v("快速查找")],
                                      ),
                                    ],
                                    1,
                                  ),
                                  e.isTree
                                    ? a("self-org-tree", {
                                        ref: "SelfOrgTree",
                                        attrs: {
                                          mode: "2",
                                          selectObj: e.orgObj,
                                          size: "small",
                                          placeholder: "请输入搜索关键字",
                                        },
                                        on: { clickCallBack: e.clickCallBack },
                                      })
                                    : e._e(),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      e.isTree
                        ? e._e()
                        : a(
                            "page-search",
                            [
                              a(
                                "el-form",
                                { attrs: { inline: !0 } },
                                [
                                  a(
                                    "el-form-item",
                                    [
                                      a("el-input", {
                                        attrs: {
                                          size: "mini",
                                          placeholder: "组织机构名",
                                        },
                                        model: {
                                          value: e.formParams.orgName,
                                          callback: function (t) {
                                            e.$set(e.formParams, "orgName", t);
                                          },
                                          expression: "formParams.orgName",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-form-item",
                                    [
                                      a(
                                        "el-button",
                                        {
                                          attrs: {
                                            size: "mini",
                                            type: "primary",
                                            icon: "el-icon-search",
                                          },
                                          on: { click: e.getTableData },
                                        },
                                        [e._v("查询")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                      e.isTree
                        ? e._e()
                        : a(
                            "page-content",
                            [
                              a(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: e.tableDataLoading,
                                      expression: "tableDataLoading",
                                    },
                                  ],
                                  ref: "table",
                                  attrs: {
                                    data: e.tableData,
                                    size: "small",
                                    border: "",
                                    "highlight-current-row": "",
                                    "element-loading-text":
                                      "数据加载中，请稍后！",
                                    "element-loading-spinner":
                                      "el-icon-loading",
                                    "element-loading-background":
                                      "rgba(255, 255, 255, 0.8)",
                                  },
                                  on: { "row-click": e.changeBaseInfo },
                                },
                                e._l(e.tableList, function (e, t) {
                                  return a("el-table-column", {
                                    key: t,
                                    attrs: {
                                      prop: e.prop,
                                      label: e.label,
                                      align: "center",
                                      width: e.width,
                                    },
                                  });
                                }),
                                1,
                              ),
                              a(
                                "div",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  a("el-pagination", {
                                    attrs: {
                                      background: "",
                                      layout:
                                        "total, sizes, prev, pager, next, jumper",
                                      total: e.total,
                                      "page-size": e.formParams.pageSize,
                                      "current-page": e.formParams.pageNum,
                                      "page-sizes": [10, 30, 50, 100, 300, 500],
                                    },
                                    on: {
                                      "current-change": e.currentChange,
                                      "size-change": e.sizeChange,
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                    ],
                    1,
                  ),
                  a(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      a(
                        "page-search",
                        [
                          a(
                            "el-radio-group",
                            {
                              attrs: { size: "small" },
                              on: { change: e.changeBaseInfo },
                              model: {
                                value: e.isBaseInfo,
                                callback: function (t) {
                                  e.isBaseInfo = t;
                                },
                                expression: "isBaseInfo",
                              },
                            },
                            [
                              a("el-radio-button", { attrs: { label: 1 } }, [
                                e._v("基本属性"),
                              ]),
                              e.isGrade7
                                ? a(
                                    "el-radio-button",
                                    { attrs: { label: 3 } },
                                    [e._v("认领实例规则")],
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "el-radio-button",
                                    { attrs: { label: 2 } },
                                    [e._v("营销网格覆盖网点")],
                                  )
                                : e._e(),
                              e.isGrade7
                                ? e._e()
                                : a(
                                    "el-radio-button",
                                    {
                                      attrs: {
                                        title: "请选择七级网格",
                                        disabled: "",
                                      },
                                    },
                                    [e._v("认领实例规则")],
                                  ),
                              e.isGrade7
                                ? e._e()
                                : a(
                                    "el-radio-button",
                                    {
                                      attrs: {
                                        title: "请选择七级网格",
                                        disabled: "",
                                      },
                                    },
                                    [e._v("营销网格覆盖网点")],
                                  ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      1 == e.isBaseInfo
                        ? a(
                            "page-content",
                            [
                              1 == e.isGrade56
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.name) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.orgCode) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.orgTypeName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "上级机构",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.upBssOrgName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "本地网", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.regionName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "营业区", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.areaName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "创建时间",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.createDt) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构描述",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.description) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "版本时间",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.version) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              2 == e.isGrade56
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "责任人名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.staffName) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "责任人编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.staffCode) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "销售员编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.salesCode) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "揽机工号",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.partyCode) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        { attrs: { label: "角色", span: "4" } },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.roleName) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "创建时间",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.createDate) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "详细说明",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.staffDesc) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              3 == e.isGrade56
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "网格ID", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.bssOrgId) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "网格名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.bssOrgName) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "网格类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.bssOrgTypeMs) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "乡镇渠道编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.posCode) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "管控标识",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.listTypeId) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel1",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "营销网格名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.bssOrgName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "营销网格编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.bssOrgCode) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "本地网", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.regionName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "营业区", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.areaName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构特征",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.orgTypeName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "市场特征",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.gridCharName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "城乡属性",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                e.tableData1
                                                  .cityVillageTypeName,
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        { attrs: { label: "街道", span: "4" } },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.standName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "物理网格类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.gisTypeName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "地域类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                e.tableData1.gisCityVillageName,
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "房屋采集情况",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "房屋总套数:" +
                                                  e.tableData1.roomNum +
                                                  " 住宅楼房屋套数:" +
                                                  e.tableData1.room3 +
                                                  " 办公房屋套数:" +
                                                  e.tableData1.room1 +
                                                  " 商铺房屋套数:" +
                                                  e.tableData1.room2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "楼栋采集情况",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "总六级地址数:" +
                                                  e.tableData1.buildingCount +
                                                  " 住宅类六级地址数:" +
                                                  e.tableData1.building3 +
                                                  " 商住两用类六级地址数:" +
                                                  e.tableData1.building1 +
                                                  " 商用六级地址数:" +
                                                  e.tableData1.building2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "标准地址计算(9级)",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "总九级地址数:" +
                                                  e.tableData1.jRoomNum +
                                                  " 住宅类九级地址数:" +
                                                  e.tableData1.jRoom3 +
                                                  " 办公类九级地址数:" +
                                                  e.tableData1.jRoom1 +
                                                  " 商铺类九级地址数:" +
                                                  e.tableData1.jRoom2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "标准地址计算(6级)",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "总楼栋数或村组数:" +
                                                  e.tableData1.jBuildingCount +
                                                  " 纯住宅栋数或村组数:" +
                                                  e.tableData1.jBuilding3 +
                                                  "  商住两用栋数或村组数:" +
                                                  e.tableData1.jBuilding1 +
                                                  " 纯商用楼栋数或村组数:" +
                                                  e.tableData1.jBuilding2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "人口户数情况",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "人口数:" +
                                                  e.tableData1.population +
                                                  " 户数:" +
                                                  e.tableData1.household
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "物业信息",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "有无物业:" +
                                                  e.tableData1.isProperty +
                                                  " 物业公司:" +
                                                  e.tableData1.propertyName +
                                                  " 物业联系人/电话:" +
                                                  e.tableData1.propertyContact
                                                ).replace(
                                                  /undefined/g,
                                                  "无数据",
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "el-table",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading2,
                                          expression: "tableDataLoading2",
                                        },
                                      ],
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        height: "180px",
                                        data: e.GISData,
                                        size: "mini",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a("el-table-column", {
                                        attrs: {
                                          label: "6级地址ID",
                                          prop: "segmId",
                                          width: "200px",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "6级地址全称",
                                          prop: "standName",
                                          width: "430px",
                                          "show-overflow-tooltip": "",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "9级地址数",
                                          prop: "roomCnt",
                                        },
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (t) {
                                                return [
                                                  a(
                                                    "el-link",
                                                    {
                                                      attrs: {
                                                        type: "primary",
                                                      },
                                                      on: {
                                                        click: function (a) {
                                                          return e.handleClick(
                                                            t.row,
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v(e._s(t.row.roomCnt))],
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          2610468697,
                                        ),
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "住宅类9级地址数",
                                          prop: "zzRoomCnt",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "办公类9级地址数",
                                          prop: "bgRoomCnt",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "商铺类9级地址数",
                                          prop: "spRoomCnt",
                                        },
                                      }),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "div",
                                    { staticStyle: { "text-align": "center" } },
                                    [
                                      a("el-pagination", {
                                        attrs: {
                                          small: "",
                                          background: "",
                                          layout:
                                            "total, prev, pager, next, jumper",
                                          total: e.total1,
                                          "page-size": e.formParams1.pageSize,
                                          "current-page": e.formParams1.pageNum,
                                          "page-sizes": [
                                            10, 30, 50, 100, 300, 500,
                                          ],
                                        },
                                        on: {
                                          "current-change": e.currentChange1,
                                        },
                                      }),
                                    ],
                                    1,
                                  )
                                : e._e(),
                            ],
                            1,
                          )
                        : e._e(),
                      2 == e.isBaseInfo
                        ? a(
                            "page-content",
                            [
                              a(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: e.tableDataLoading3,
                                      expression: "tableDataLoading3",
                                    },
                                  ],
                                  ref: "table",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    height: e.tableHeight,
                                    data: e.RLdata,
                                    size: "mini",
                                    border: "",
                                    "element-loading-text":
                                      "数据加载中，请稍后！",
                                    "element-loading-spinner":
                                      "el-icon-loading",
                                    "element-loading-background":
                                      "rgba(255, 255, 255, 0.8)",
                                  },
                                },
                                [
                                  a("el-table-column", {
                                    attrs: {
                                      label: "销售点编码",
                                      prop: "orgCode",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "销售点名称",
                                      prop: "orgName",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                      3 == e.isBaseInfo
                        ? a(
                            "page-content",
                            [
                              a(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: e.tableDataLoading4,
                                      expression: "tableDataLoading4",
                                    },
                                  ],
                                  ref: "table",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    height: e.tableHeight,
                                    data: e.YXdata,
                                    size: "mini",
                                    border: "",
                                    "element-loading-text":
                                      "数据加载中，请稍后！",
                                    "element-loading-spinner":
                                      "el-icon-loading",
                                    "element-loading-background":
                                      "rgba(255, 255, 255, 0.8)",
                                  },
                                },
                                [
                                  a("el-table-column", {
                                    attrs: {
                                      label: "规则分组",
                                      prop: "ruleGroupName",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "规则名称",
                                      prop: "ruleName",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "包区名称",
                                      prop: "bssOrgName",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "条件元素",
                                      prop: "condElementName",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "操作符",
                                      prop: "operator",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "操作值",
                                      prop: "opeValue",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "el-dialog",
                {
                  attrs: {
                    title: "工单明细",
                    visible: e.dialogVisible,
                    width: "90%",
                    center: "",
                  },
                  on: {
                    "update:visible": function (t) {
                      e.dialogVisible = t;
                    },
                  },
                },
                [
                  a(
                    "el-table",
                    { attrs: { data: e.GISDetailData, size: "mini" } },
                    [
                      a("el-table-column", {
                        attrs: { label: "九级地址ID", prop: "subSegmId" },
                      }),
                      a("el-table-column", {
                        attrs: {
                          label: "九级地址全称",
                          prop: "standName",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: { label: "房间类型", prop: "buildtypename" },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = a("4e3c"),
        s = a("8b98"),
        o = a("fe48"),
        n = {
          components: {
            PageContent: s["a"],
            PageSearch: r["a"],
            SelfOrgTree: o["a"],
          },
          mounted: function () {
            (this.orgObj.orgId = "843000000000000"), (this.isGrade7 = !1);
          },
          data: function () {
            return {
              tableData: [],
              tableData1: {
                name: "",
                orgCode: "",
                upBssOrgName: "",
                regionName: "",
                areaName: "",
                createDt: "",
                description: "",
                version: "",
                orgTypeName: "",
              },
              GISData: [],
              GISDetailData: [],
              RLdata: [],
              YXdata: [],
              isTree: !0,
              isBaseInfo: 1,
              isGrade7: null,
              isGrade56: 1,
              dialogVisible: !1,
              tableList: [
                { prop: "bssOrgName", label: "机构名称", width: "200px" },
                { prop: "orgLevel", label: "机构层级" },
                { prop: "regionName", label: "本地网" },
                { prop: "areaName", label: "营业区" },
                { prop: "orgPath", label: "机构路径", width: "500px" },
              ],
              total: 0,
              total1: 0,
              total2: 0,
              total3: 0,
              tableDataLoading: !1,
              tableDataLoading1: !1,
              tableDataLoading2: !1,
              tableDataLoading3: !1,
              tableDataLoading4: !1,
              selection: [],
              formParams: { pageNum: 1, pageSize: 10, orgName: "" },
              formParams1: { pageNum: 1, pageSize: 10 },
              formParams2: { pageNum: 1, pageSize: 10 },
              formParams3: { pageNum: 1, pageSize: 10 },
              orgObj: { orgId: "", orgCode: "", orgName: "", orgLevel: "" },
              queryForm: {},
            };
          },
          methods: {
            getTableData: function () {
              var e = this;
              if ("" !== this.formParams.orgName) {
                this.tableDataLoading = !0;
                var t = {};
                (t = this.formParams),
                  (t.areaId = JSON.parse(
                    localStorage.getItem("loginJobParams"),
                  ).areaId),
                  this.$http
                    .post(
                      "/hxcb/gridmanagement/salessupport/applyresion/qryOrgInfo",
                      t,
                    )
                    .then(function (t) {
                      t.success &&
                        ((e.total = t.data.total), (e.tableData = t.data.list)),
                        (e.tableDataLoading = !1);
                    })
                    .catch(function (t) {
                      e.tableDataLoading = !1;
                    });
              } else
                this.$message({
                  showClose: !0,
                  message: "请输入组织机构名称",
                  type: "error",
                });
            },
            getBaseInfo: function () {
              var e = this;
              this.tableDataLoading1 = !0;
              var t = {};
              (t.bssOrgId = this.orgObj.orgId),
                (t.orgLevel = this.orgObj.orgLevel),
                (t.orgCode = this.orgObj.orgCode),
                this.$http
                  .post("/khjy/yxwx/vipwx/wxzx/qryWXST", t)
                  .then(function (t) {
                    t.success
                      ? t.data.list.length > 0
                        ? (e.tableData1 = t.data.list[0])
                        : (e.$message({
                            showClose: !0,
                            message: "当前组织机构无数据",
                            type: "error",
                          }),
                          (e.tableData1 = {}))
                      : e.$message({
                          showClose: !0,
                          message: t.message,
                          type: "error",
                        }),
                      (e.tableDataLoading1 = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading1 = !1;
                  });
            },
            getBaseInfo1: function () {
              var e = this;
              this.tableDataLoading1 = !0;
              var t = this.queryForm;
              this.getGisInfo(),
                this.$http
                  .post("/khjy/yxwx/vipwx/wxzx/qryBaseInfo1", t)
                  .then(function (t) {
                    t.success
                      ? t.data.list.length > 0
                        ? (e.tableData1 = t.data.list[0])
                        : (e.$message({
                            showClose: !0,
                            message: "当前组织机构无数据",
                            type: "error",
                          }),
                          (e.tableData1 = {}))
                      : e.$message({
                          showClose: !0,
                          message: t.message,
                          type: "error",
                        }),
                      (e.tableDataLoading1 = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading1 = !1;
                  });
            },
            getGisInfo: function () {
              var e = this;
              this.tableDataLoading2 = !0;
              var t = this.queryForm;
              (t.pageSize = this.formParams1.pageSize),
                (t.pageNum = this.formParams1.pageNum),
                this.$http
                  .post("/khjy/yxwx/vipwx/wxzx/qryGisInfo", t)
                  .then(function (t) {
                    t.success
                      ? ((e.total1 = t.data.total), (e.GISData = t.data.list))
                      : e.$message({
                          showClose: !0,
                          message: t.message,
                          type: "error",
                        }),
                      (e.tableDataLoading2 = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading2 = !1;
                  });
            },
            qryRLInfo: function () {
              var e = this;
              this.tableDataLoading3 = !0;
              var t = this.queryForm;
              this.$http
                .post("/khjy/yxwx/vipwx/wxzx/qryRLInfo", t)
                .then(function (t) {
                  t.success
                    ? ((e.total2 = t.data.total), (e.RLdata = t.data.list))
                    : e.$message({
                        showClose: !0,
                        message: t.message,
                        type: "error",
                      }),
                    (e.tableDataLoading3 = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading3 = !1;
                });
            },
            changeBaseInfo: function (e) {
              this.isGrade7 = !0;
              var t = {};
              this.isTree ||
                void 0 == e.orgId ||
                ((t.bssOrgId = e.orgId), (this.queryForm = t)),
                this.isTree &&
                  ((t.bssOrgId = this.orgObj.orgId), (this.queryForm = t)),
                1 === this.isBaseInfo && this.getBaseInfo1(),
                2 === this.isBaseInfo && this.qryRLInfo(),
                3 === this.isBaseInfo && this.qryYxInfo();
            },
            qryYxInfo: function () {
              var e = this;
              this.tableDataLoading4 = !0;
              var t = this.queryForm;
              this.$http
                .post("/khjy/yxwx/vipwx/wxzx/qryYXInfo", t)
                .then(function (t) {
                  t.success
                    ? ((e.total3 = t.data.total), (e.YXdata = t.data.list))
                    : e.$message({
                        showClose: !0,
                        message: t.message,
                        type: "error",
                      }),
                    (e.tableDataLoading4 = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading4 = !1;
                });
            },
            handleClick: function (e) {
              var t = this,
                a = e;
              this.$http
                .post("/khjy/yxwx/vipwx/wxzx/qryGISDetailData", a)
                .then(function (e) {
                  e.success
                    ? (t.GISDetailData = e.data.list)
                    : t.$message({
                        showClose: !0,
                        message: e.message,
                        type: "error",
                      }),
                    (t.tableDataLoading3 = !1);
                })
                .catch(function (e) {
                  t.tableDataLoading3 = !1;
                }),
                (this.dialogVisible = !0);
            },
            arraySpanMethod: function (e) {
              e.row, e.column;
              var t = e.rowIndex,
                a = e.columnIndex;
              if (4 === t || 12 === t) return 1 === a ? [1, 4] : [0, 0];
              if (
                6 === t ||
                7 === t ||
                8 === t ||
                9 === t ||
                10 === t ||
                11 === t
              ) {
                if (1 === a) return [1, 3];
                if (0 !== a) return [0, 0];
              }
            },
            changeSelection: function (e) {
              this.selection = e;
            },
            currentChange: function (e) {
              (this.formParams.pageNum = e), this.getTableData();
            },
            currentChange1: function (e) {
              (this.formParams1.pageNum = e), this.getGisInfo();
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            sizeChange1: function (e) {
              (this.formParams1.pageSize = e), this.getGisInfo();
            },
            clickCallBack: function () {
              7 !== this.orgObj.orgLevel
                ? 5 == this.orgObj.orgLevel
                  ? ((this.isGrade56 = 2),
                    (this.isGrade7 = !1),
                    this.getBaseInfo())
                  : 6 == this.orgObj.orgLevel
                    ? ((this.isGrade56 = 3),
                      (this.isGrade7 = !1),
                      this.getBaseInfo())
                    : ((this.isBaseInfo = 1),
                      (this.isGrade7 = !1),
                      this.getBaseInfo())
                : ((this.isGrade56 = 7), this.changeBaseInfo());
            },
          },
        },
        c = n,
        d = (a("03d6"), a("2877")),
        p = Object(d["a"])(c, i, l, !1, null, null, null);
      t["default"] = p.exports;
    },
    "75da": function (e, t, a) {},
    "7a2c": function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62");
        function s(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : s(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "selfRegionTree" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择地域--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          created: function () {},
          computed: o(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          beforeDestroy: function () {
            "2" == this.mode &&
              window.removeEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this,
                a = this.$storage.getLocalStorage("selfRegionTree");
              "null" == a || null == a
                ? ((this.loading = !0),
                  this.getData()
                    .then(function (a) {
                      (t.zNodes = a),
                        e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                        Object(l["a"])(t.treeEl, "#selfRegionInput", null, !1),
                        (t.loading = !1);
                    })
                    .catch(function (e) {
                      t.loading = !1;
                    }))
                : ((this.zNodes = JSON.parse(
                    this.$storage.getLocalStorage("selfRegionTree"),
                  )),
                  e.fn.zTree.init(
                    e("#" + this.treeEl),
                    this.setting,
                    this.zNodes,
                  ),
                  Object(l["a"])(this.treeEl, "#selfRegionInput", null, !1),
                  (this.loading = !1));
            },
            initStyle: function () {
              if ("1" == this.mode) {
                var t = this.$refs.selfRegionInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", 1.4 * t),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.selfRegionInput.$el.offsetTop -
                      175,
                  );
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#selfRegionInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getSelfRegionTree", {})
                    .then(function (a) {
                      var i = [];
                      a.success &&
                        ((i = a.data),
                        e.$storage.setLocalStorage(
                          "selfRegionTree",
                          JSON.stringify(i),
                        )),
                        t(
                          JSON.parse(
                            e.$storage.getLocalStorage("selfRegionTree"),
                          ),
                        ),
                        t(i);
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (t, a) {
              for (
                var i = this.curExpandNode
                    ? this.curExpandNode.getParentNode()
                    : null,
                  l = a.parentTId ? a.getParentNode() : null,
                  r = e.fn.zTree.getZTreeObj(this.treeEl),
                  s = 0,
                  o = l ? l.children.length : 0;
                s < o;
                s++
              )
                a !== l.children[s] && r.expandNode(l.children[s], !1);
              while (i) {
                if (i === a) break;
                i = i.getParentNode();
              }
              i || this.singlePath(a);
            },
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.regionName = i.name),
                      void 0 != l.selectObj.regionId &&
                        (l.selectObj.regionId = i.id),
                      void 0 != l.selectObj.regionLevel &&
                        (l.selectObj.regionLevel = i.lv);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.regionName = i.name),
                  void 0 != this.selectObj.regionId &&
                    (this.selectObj.regionId = i.id),
                  void 0 != this.selectObj.regionLevel &&
                    (this.selectObj.regionLevel = i.lv)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.regionId &&
                  (this.selectObj.regionId = this.checkIdArray.toString()),
                void 0 != this.selectObj.regionName &&
                  (this.selectObj.regionName = this.checkNameArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    "866b": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "el-row",
                { staticStyle: { position: "inherit" } },
                [
                  a(
                    "el-col",
                    { attrs: { span: 8 } },
                    [
                      a(
                        "page-search",
                        [
                          a(
                            "el-form",
                            [
                              a(
                                "el-form-item",
                                [
                                  a(
                                    "el-radio-group",
                                    {
                                      attrs: { size: "small" },
                                      model: {
                                        value: e.isTree,
                                        callback: function (t) {
                                          e.isTree = t;
                                        },
                                        expression: "isTree",
                                      },
                                    },
                                    [
                                      a(
                                        "el-radio-button",
                                        { attrs: { label: !0 } },
                                        [e._v("机构树")],
                                      ),
                                      a(
                                        "el-radio-button",
                                        { attrs: { label: !1 } },
                                        [e._v("快速查找")],
                                      ),
                                    ],
                                    1,
                                  ),
                                  e.isTree
                                    ? a("self-org-tree", {
                                        ref: "SelfOrgTree",
                                        attrs: {
                                          mode: "2",
                                          selectObj: e.orgObj,
                                          size: "small",
                                          placeholder: "请输入搜索关键字",
                                        },
                                        on: { clickCallBack: e.clickCallBack },
                                      })
                                    : e._e(),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      e.isTree
                        ? e._e()
                        : a(
                            "page-search",
                            [
                              a(
                                "el-form",
                                { attrs: { inline: !0 } },
                                [
                                  a(
                                    "el-form-item",
                                    [
                                      a("el-input", {
                                        attrs: {
                                          size: "mini",
                                          placeholder: "组织机构名",
                                        },
                                        model: {
                                          value: e.formParams.orgName,
                                          callback: function (t) {
                                            e.$set(e.formParams, "orgName", t);
                                          },
                                          expression: "formParams.orgName",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "el-form-item",
                                    [
                                      a(
                                        "el-button",
                                        {
                                          attrs: {
                                            size: "mini",
                                            type: "primary",
                                            icon: "el-icon-search",
                                          },
                                          on: { click: e.getTableData },
                                        },
                                        [e._v("查询")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                      e.isTree
                        ? e._e()
                        : a(
                            "page-content",
                            [
                              a(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: e.tableDataLoading,
                                      expression: "tableDataLoading",
                                    },
                                  ],
                                  ref: "table",
                                  attrs: {
                                    data: e.tableData,
                                    size: "small",
                                    border: "",
                                    "highlight-current-row": "",
                                    "element-loading-text":
                                      "数据加载中，请稍后！",
                                    "element-loading-spinner":
                                      "el-icon-loading",
                                    "element-loading-background":
                                      "rgba(255, 255, 255, 0.8)",
                                  },
                                  on: { "row-click": e.changeBaseInfo },
                                },
                                e._l(e.tableList, function (e, t) {
                                  return a("el-table-column", {
                                    key: t,
                                    attrs: {
                                      prop: e.prop,
                                      label: e.label,
                                      align: "center",
                                      width: e.width,
                                    },
                                  });
                                }),
                                1,
                              ),
                              a(
                                "div",
                                { staticStyle: { "text-align": "center" } },
                                [
                                  a("el-pagination", {
                                    attrs: {
                                      background: "",
                                      layout:
                                        "total, sizes, prev, pager, next, jumper",
                                      total: e.total,
                                      "page-size": e.formParams.pageSize,
                                      "current-page": e.formParams.pageNum,
                                      "page-sizes": [10, 30, 50, 100, 300, 500],
                                    },
                                    on: {
                                      "current-change": e.currentChange,
                                      "size-change": e.sizeChange,
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                    ],
                    1,
                  ),
                  a(
                    "el-col",
                    { attrs: { span: 16 } },
                    [
                      a(
                        "page-search",
                        [
                          a(
                            "el-radio-group",
                            {
                              attrs: { size: "small" },
                              on: { change: e.changeBaseInfo },
                              model: {
                                value: e.isBaseInfo,
                                callback: function (t) {
                                  e.isBaseInfo = t;
                                },
                                expression: "isBaseInfo",
                              },
                            },
                            [
                              a("el-radio-button", { attrs: { label: 1 } }, [
                                e._v("基本属性"),
                              ]),
                              e.isGrade7
                                ? a(
                                    "el-radio-button",
                                    { attrs: { label: 3 } },
                                    [e._v("认领实例规则")],
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "el-radio-button",
                                    { attrs: { label: 2 } },
                                    [e._v("营销网格覆盖网点")],
                                  )
                                : e._e(),
                              e.isGrade7
                                ? e._e()
                                : a(
                                    "el-radio-button",
                                    {
                                      attrs: {
                                        title: "请选择七级网格",
                                        disabled: "",
                                      },
                                    },
                                    [e._v("认领实例规则")],
                                  ),
                              e.isGrade7
                                ? e._e()
                                : a(
                                    "el-radio-button",
                                    {
                                      attrs: {
                                        title: "请选择七级网格",
                                        disabled: "",
                                      },
                                    },
                                    [e._v("营销网格覆盖网点")],
                                  ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      1 == e.isBaseInfo
                        ? a(
                            "page-content",
                            [
                              1 == e.isGrade56
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.name) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.orgCode) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.orgTypeName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "上级机构",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.upBssOrgName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "本地网", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.regionName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "营业区", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.areaName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "创建时间",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.createDt) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构描述",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.description) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "版本时间",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.version) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              2 == e.isGrade56
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "责任人名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.staffName) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "责任人编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.staffCode) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "销售员编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.salesCode) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "揽机工号",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.partyCode) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        { attrs: { label: "角色", span: "4" } },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.roleName) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "创建时间",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.createDate) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "详细说明",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t      " +
                                              e._s(e.tableData1.staffDesc) +
                                              "\n\t\t    ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              3 == e.isGrade56
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "网格ID", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.bssOrgId) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "网格名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.bssOrgName) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "网格类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.bssOrgTypeMs) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "乡镇渠道编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.posCode) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "管控标识",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n\t\t    " +
                                              e._s(e.tableData1.listTypeId) +
                                              "\n\t\t  ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "el-descriptions",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading1,
                                          expression: "tableDataLoading1",
                                        },
                                      ],
                                      attrs: {
                                        column: 8,
                                        size: "medium",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "label-class-name": "myLabel1",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "营销网格名称",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.bssOrgName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "营销网格编码",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.bssOrgCode) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "本地网", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.regionName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: { label: "营业区", span: "4" },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.areaName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "机构特征",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.orgTypeName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "市场特征",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.gridCharName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "城乡属性",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                e.tableData1
                                                  .cityVillageTypeName,
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        { attrs: { label: "街道", span: "4" } },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.standName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "物理网格类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.tableData1.gisTypeName) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "地域类型",
                                            span: "4",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                e.tableData1.gisCityVillageName,
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "房屋采集情况",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "房屋总套数:" +
                                                  e.tableData1.roomNum +
                                                  " 住宅楼房屋套数:" +
                                                  e.tableData1.room3 +
                                                  " 办公房屋套数:" +
                                                  e.tableData1.room1 +
                                                  " 商铺房屋套数:" +
                                                  e.tableData1.room2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "楼栋采集情况",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "总六级地址数:" +
                                                  e.tableData1.buildingCount +
                                                  " 住宅类六级地址数:" +
                                                  e.tableData1.building3 +
                                                  " 商住两用类六级地址数:" +
                                                  e.tableData1.building1 +
                                                  " 商用六级地址数:" +
                                                  e.tableData1.building2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "标准地址计算(9级)",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "总九级地址数:" +
                                                  e.tableData1.jRoomNum +
                                                  " 住宅类九级地址数:" +
                                                  e.tableData1.jRoom3 +
                                                  " 办公类九级地址数:" +
                                                  e.tableData1.jRoom1 +
                                                  " 商铺类九级地址数:" +
                                                  e.tableData1.jRoom2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "标准地址计算(6级)",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "总楼栋数或村组数:" +
                                                  e.tableData1.jBuildingCount +
                                                  " 纯住宅栋数或村组数:" +
                                                  e.tableData1.jBuilding3 +
                                                  "  商住两用栋数或村组数:" +
                                                  e.tableData1.jBuilding1 +
                                                  " 纯商用楼栋数或村组数:" +
                                                  e.tableData1.jBuilding2
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "人口户数情况",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "人口数:" +
                                                  e.tableData1.population +
                                                  " 户数:" +
                                                  e.tableData1.household
                                                ).replace(/undefined/g, "无"),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                      a(
                                        "el-descriptions-item",
                                        {
                                          attrs: {
                                            label: "物业信息",
                                            span: "8",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                (
                                                  "有无物业:" +
                                                  e.tableData1.isProperty +
                                                  " 物业公司:" +
                                                  e.tableData1.propertyName +
                                                  " 物业联系人/电话:" +
                                                  e.tableData1.propertyContact
                                                ).replace(
                                                  /undefined/g,
                                                  "无数据",
                                                ),
                                              ) +
                                              "\n            ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "el-table",
                                    {
                                      directives: [
                                        {
                                          name: "loading",
                                          rawName: "v-loading",
                                          value: e.tableDataLoading2,
                                          expression: "tableDataLoading2",
                                        },
                                      ],
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        height: "180px",
                                        data: e.GISData,
                                        size: "mini",
                                        border: "",
                                        "element-loading-text":
                                          "数据加载中，请稍后！",
                                        "element-loading-spinner":
                                          "el-icon-loading",
                                        "element-loading-background":
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                    },
                                    [
                                      a("el-table-column", {
                                        attrs: {
                                          label: "6级地址ID",
                                          prop: "segmId",
                                          width: "200px",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "6级地址全称",
                                          prop: "standName",
                                          width: "430px",
                                          "show-overflow-tooltip": "",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "9级地址数",
                                          prop: "roomCnt",
                                        },
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (t) {
                                                return [
                                                  a(
                                                    "el-link",
                                                    {
                                                      attrs: {
                                                        type: "primary",
                                                      },
                                                      on: {
                                                        click: function (a) {
                                                          return e.handleClick(
                                                            t.row,
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v(e._s(t.row.roomCnt))],
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          2610468697,
                                        ),
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "住宅类9级地址数",
                                          prop: "zzRoomCnt",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "办公类9级地址数",
                                          prop: "bgRoomCnt",
                                        },
                                      }),
                                      a("el-table-column", {
                                        attrs: {
                                          label: "商铺类9级地址数",
                                          prop: "spRoomCnt",
                                        },
                                      }),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e.isGrade7
                                ? a(
                                    "div",
                                    { staticStyle: { "text-align": "center" } },
                                    [
                                      a("el-pagination", {
                                        attrs: {
                                          small: "",
                                          background: "",
                                          layout:
                                            "total, prev, pager, next, jumper",
                                          total: e.total1,
                                          "page-size": e.formParams1.pageSize,
                                          "current-page": e.formParams1.pageNum,
                                          "page-sizes": [
                                            10, 30, 50, 100, 300, 500,
                                          ],
                                        },
                                        on: {
                                          "current-change": e.currentChange1,
                                        },
                                      }),
                                    ],
                                    1,
                                  )
                                : e._e(),
                            ],
                            1,
                          )
                        : e._e(),
                      2 == e.isBaseInfo
                        ? a(
                            "page-content",
                            [
                              a(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: e.tableDataLoading3,
                                      expression: "tableDataLoading3",
                                    },
                                  ],
                                  ref: "table",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    height: e.tableHeight,
                                    data: e.RLdata,
                                    size: "mini",
                                    border: "",
                                    "element-loading-text":
                                      "数据加载中，请稍后！",
                                    "element-loading-spinner":
                                      "el-icon-loading",
                                    "element-loading-background":
                                      "rgba(255, 255, 255, 0.8)",
                                  },
                                },
                                [
                                  a("el-table-column", {
                                    attrs: {
                                      label: "销售点编码",
                                      prop: "orgCode",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "销售点名称",
                                      prop: "orgName",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                      3 == e.isBaseInfo
                        ? a(
                            "page-content",
                            [
                              a(
                                "el-table",
                                {
                                  directives: [
                                    {
                                      name: "loading",
                                      rawName: "v-loading",
                                      value: e.tableDataLoading4,
                                      expression: "tableDataLoading4",
                                    },
                                  ],
                                  ref: "table",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    height: e.tableHeight,
                                    data: e.YXdata,
                                    size: "mini",
                                    border: "",
                                    "element-loading-text":
                                      "数据加载中，请稍后！",
                                    "element-loading-spinner":
                                      "el-icon-loading",
                                    "element-loading-background":
                                      "rgba(255, 255, 255, 0.8)",
                                  },
                                },
                                [
                                  a("el-table-column", {
                                    attrs: {
                                      label: "规则分组",
                                      prop: "ruleGroupName",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "规则名称",
                                      prop: "ruleName",
                                      "show-overflow-tooltip": "",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "包区名称",
                                      prop: "bssOrgName",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "条件元素",
                                      prop: "condElementName",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "操作符",
                                      prop: "operator",
                                    },
                                  }),
                                  a("el-table-column", {
                                    attrs: {
                                      label: "操作值",
                                      prop: "opeValue",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "el-dialog",
                {
                  attrs: {
                    title: "工单明细",
                    visible: e.dialogVisible,
                    width: "90%",
                    center: "",
                  },
                  on: {
                    "update:visible": function (t) {
                      e.dialogVisible = t;
                    },
                  },
                },
                [
                  a(
                    "el-table",
                    { attrs: { data: e.GISDetailData, size: "mini" } },
                    [
                      a("el-table-column", {
                        attrs: { label: "九级地址ID", prop: "subSegmId" },
                      }),
                      a("el-table-column", {
                        attrs: {
                          label: "九级地址全称",
                          prop: "standName",
                          "show-overflow-tooltip": "",
                        },
                      }),
                      a("el-table-column", {
                        attrs: { label: "房间类型", prop: "buildtypename" },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = a("4e3c"),
        s = a("8b98"),
        o = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "selfOrgInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          readonly: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.orgName,
                          callback: function (t) {
                            e.$set(e.selectObj, "orgName", t);
                          },
                          expression: "selectObj.orgName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "selfOrgInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "selfOrgInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        n = [],
        c = a("6c4a"),
        d = c["a"],
        p = a("2877"),
        m = Object(p["a"])(d, o, n, !1, null, null, null),
        h = m.exports,
        g = {
          components: {
            PageContent: s["a"],
            PageSearch: r["a"],
            SelfOrgTree: h,
          },
          mounted: function () {
            (this.orgObj.orgId = "843000000000000"), (this.isGrade7 = !1);
          },
          data: function () {
            return {
              tableData: [],
              tableData1: {
                name: "",
                orgCode: "",
                upBssOrgName: "",
                regionName: "",
                areaName: "",
                createDt: "",
                description: "",
                version: "",
                orgTypeName: "",
              },
              GISData: [],
              GISDetailData: [],
              RLdata: [],
              YXdata: [],
              isTree: !0,
              isBaseInfo: 1,
              isGrade7: null,
              isGrade56: 1,
              dialogVisible: !1,
              tableList: [
                { prop: "bssOrgName", label: "机构名称", width: "200px" },
                { prop: "orgLevel", label: "机构层级" },
                { prop: "regionName", label: "本地网" },
                { prop: "areaName", label: "营业区" },
                { prop: "orgPath", label: "机构路径", width: "500px" },
              ],
              total: 0,
              total1: 0,
              total2: 0,
              total3: 0,
              tableDataLoading: !1,
              tableDataLoading1: !1,
              tableDataLoading2: !1,
              tableDataLoading3: !1,
              tableDataLoading4: !1,
              selection: [],
              formParams: { pageNum: 1, pageSize: 10, orgName: "" },
              formParams1: { pageNum: 1, pageSize: 10 },
              formParams2: { pageNum: 1, pageSize: 10 },
              formParams3: { pageNum: 1, pageSize: 10 },
              orgObj: { orgId: "", orgCode: "", orgName: "", orgLevel: "" },
              queryForm: {},
            };
          },
          methods: {
            getTableData: function () {
              var e = this;
              if ("" !== this.formParams.orgName) {
                this.tableDataLoading = !0;
                var t = {};
                (t = this.formParams),
                  (t.areaId = JSON.parse(
                    localStorage.getItem("loginJobParams"),
                  ).areaId),
                  this.$http
                    .post(
                      "/hxcb/gridmanagement/salessupport/applyresion/qryOrgInfoNew",
                      t,
                    )
                    .then(function (t) {
                      t.success &&
                        ((e.total = t.data.total), (e.tableData = t.data.list)),
                        (e.tableDataLoading = !1);
                    })
                    .catch(function (t) {
                      e.tableDataLoading = !1;
                    });
              } else
                this.$message({
                  showClose: !0,
                  message: "请输入组织机构名称",
                  type: "error",
                });
            },
            getBaseInfo: function () {
              var e = this;
              this.tableDataLoading1 = !0;
              var t = {};
              (t.bssOrgId = this.orgObj.orgId),
                (t.orgLevel = this.orgObj.orgLevel),
                (t.orgCode = this.orgObj.orgCode),
                this.$http
                  .post("/khjy/yxwx/vipwx/wxzx/qryWXSTNew", t)
                  .then(function (t) {
                    t.success
                      ? t.data.list.length > 0
                        ? (e.tableData1 = t.data.list[0])
                        : (e.$message({
                            showClose: !0,
                            message: "当前组织机构无数据",
                            type: "error",
                          }),
                          (e.tableData1 = {}))
                      : e.$message({
                          showClose: !0,
                          message: t.message,
                          type: "error",
                        }),
                      (e.tableDataLoading1 = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading1 = !1;
                  });
            },
            getBaseInfo1: function () {
              var e = this;
              this.tableDataLoading1 = !0;
              var t = this.queryForm;
              this.getGisInfo(),
                this.$http
                  .post("/khjy/yxwx/vipwx/wxzx/qryBaseInfo1New", t)
                  .then(function (t) {
                    t.success
                      ? (e.tableData1 = t.data)
                      : e.$message({
                          showClose: !0,
                          message: t.message,
                          type: "error",
                        }),
                      (e.tableDataLoading1 = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading1 = !1;
                  });
            },
            getGisInfo: function () {
              var e = this;
              this.tableDataLoading2 = !0;
              var t = this.queryForm;
              (t.pageSize = this.formParams1.pageSize),
                (t.pageNum = this.formParams1.pageNum),
                this.$http
                  .post("/khjy/yxwx/vipwx/wxzx/qryGisInfoNew", t)
                  .then(function (t) {
                    t.success
                      ? ((e.total1 = t.data.total), (e.GISData = t.data.list))
                      : e.$message({
                          showClose: !0,
                          message: t.message,
                          type: "error",
                        }),
                      (e.tableDataLoading2 = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading2 = !1;
                  });
            },
            qryRLInfo: function () {
              var e = this;
              this.tableDataLoading3 = !0;
              var t = this.queryForm;
              this.$http
                .post("/khjy/yxwx/vipwx/wxzx/qryRLInfoNew", t)
                .then(function (t) {
                  t.success
                    ? ((e.total2 = t.data.total), (e.RLdata = t.data.list))
                    : e.$message({
                        showClose: !0,
                        message: t.message,
                        type: "error",
                      }),
                    (e.tableDataLoading3 = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading3 = !1;
                });
            },
            changeBaseInfo: function (e) {
              this.isGrade7 = !0;
              var t = {};
              this.isTree ||
                void 0 == e.orgId ||
                ((t.bssOrgId = e.orgId), (this.queryForm = t)),
                this.isTree &&
                  ((t.bssOrgId = this.orgObj.orgId), (this.queryForm = t)),
                1 === this.isBaseInfo && this.getBaseInfo1(),
                2 === this.isBaseInfo && this.qryRLInfo(),
                3 === this.isBaseInfo && this.qryYxInfo();
            },
            qryYxInfo: function () {
              var e = this;
              this.tableDataLoading4 = !0;
              var t = this.queryForm;
              this.$http
                .post("/khjy/yxwx/vipwx/wxzx/qryYXInfoNew", t)
                .then(function (t) {
                  t.success
                    ? ((e.total3 = t.data.total), (e.YXdata = t.data.list))
                    : e.$message({
                        showClose: !0,
                        message: t.message,
                        type: "error",
                      }),
                    (e.tableDataLoading4 = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading4 = !1;
                });
            },
            handleClick: function (e) {
              var t = this,
                a = e;
              this.$http
                .post("/khjy/yxwx/vipwx/wxzx/qryGISDetailDataNew", a)
                .then(function (e) {
                  e.success
                    ? (t.GISDetailData = e.data.list)
                    : t.$message({
                        showClose: !0,
                        message: e.message,
                        type: "error",
                      }),
                    (t.tableDataLoading3 = !1);
                })
                .catch(function (e) {
                  t.tableDataLoading3 = !1;
                }),
                (this.dialogVisible = !0);
            },
            arraySpanMethod: function (e) {
              e.row, e.column;
              var t = e.rowIndex,
                a = e.columnIndex;
              if (4 === t || 12 === t) return 1 === a ? [1, 4] : [0, 0];
              if (
                6 === t ||
                7 === t ||
                8 === t ||
                9 === t ||
                10 === t ||
                11 === t
              ) {
                if (1 === a) return [1, 3];
                if (0 !== a) return [0, 0];
              }
            },
            changeSelection: function (e) {
              this.selection = e;
            },
            currentChange: function (e) {
              (this.formParams.pageNum = e), this.getTableData();
            },
            currentChange1: function (e) {
              (this.formParams1.pageNum = e), this.getGisInfo();
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            sizeChange1: function (e) {
              (this.formParams1.pageSize = e), this.getGisInfo();
            },
            clickCallBack: function () {
              7 !== this.orgObj.orgLevel
                ? 5 == this.orgObj.orgLevel
                  ? ((this.isGrade56 = 2),
                    (this.isGrade7 = !1),
                    this.getBaseInfo())
                  : 6 == this.orgObj.orgLevel
                    ? ((this.isGrade56 = 3),
                      (this.isGrade7 = !1),
                      this.getBaseInfo())
                    : ((this.isBaseInfo = 1),
                      (this.isGrade7 = !1),
                      this.getBaseInfo())
                : ((this.isGrade56 = 7), this.changeBaseInfo());
            },
          },
        },
        u = g,
        b = (a("5da9"), Object(p["a"])(u, i, l, !1, null, null, null));
      t["default"] = b.exports;
    },
    "87d4": function (e, t) {
      e.exports =
        "data:image/png;base64,R0lGODlhDgAOANU/AGXAhZzNm////0+wbQCZM9LQ0sfj0QCVK5jStSKZUbfjyCmmVhycSwCRM+Hj4wBkM7rMu/L+/NXz4uj38TyoZqLRo/X58oW7kqfEtACYLw6aQBukSJzFpkCEYP77/AWePPT4+Ony5wKaNrvTxv/4/vrx9n7ToI/ctIzEohefQqzUuk6/fQ6SQfXu8/n49nOki4DGkN7t4QeYOQSXMAyaMfH07wCTJ6/Pr+/r7gKdNQmWLgSUNUSqZJTQo+7u7v///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFeAA/ACwAAAAADgAOAAAGkMAfagAoGo+/S2Z2sDmbTmdidZgBYLIDwbbp8WYNgI2mEsBszZ4ARQsfMpRJaGEbWGKpjDtjAwhUCQYuAzY5YRkEM2QRBgI9M4hhNgRbCyECBjSThgCIMwNECisACxl6YhlkEgw6PC4AM5yeMB4wKQoCA5FiBAcLjRaONBmyOTkZGwAmAxrGBA0/CQ3T1NXQQQAh+QQFCgA/ACwBAAEADAAJAAAGLcCf8HcYFos/kSxDIPya0AN0Cs0xqVQbdjrEXodErdWGBAMIMxkMDKbZfpZhEAAh+QQFCgA/ACwFAAAABQAEAAAGEsAfLPD72SiwhS2TS82KmUMxCAAh+QQFCgA/ACwFAAAACAAEAAAGGMBfoAL7GX80laD4sx1sFNPmYMw0ncdfEAAh+QQFCgA/ACwEAAAACQAGAAAGJMAfrBKowH7IH8BVqw2QNhtDIUDQDj/Cz0bpbbDJrQ0c/mXKQQAh+QQFCgA/ACwDAAAACQAHAAAGLkAArAITBgAAG6+mGhhiKdtshhJ4BABdhmBLKQQI2oFAViIWNrL6YNuqyRk3OQgAIfkEBQoAPwAsAQAAAAsACAAABjzAC+AXCPwGP+KPYEsZQgMbwKLSLXUDi4IXsywOyYyuJ7AIALZk0sYwCFS0jPqXsQ0U33n4d8jI9XQEc0EAIfkEBQoAPwAsAQAAAAwACQAABkrA3y/wgw0AA1gFJvz1XDDbz9bzrH6Z2SZU49kAAkMqI50NPApKrLaQCjM6hCckgOkyzekiJlBoDnlYNisqFG6BPzMfgIhCM4dCQQAh+QQFCgA/ACwBAAAADAAKAAAGU0DUADAE/ADEwS9zAMBov2iqpzzQKgKY7WBDZHW/GSU0odgGHsMmmrEBBKpFzMI7ZNg6lSCWnd2jPzZyAgYpB4BRNkcKPIGIIo06KSlGiJY/LoBBACH5BAUFAD8ALAEAAAAMAA4AAAZYwJ8QICwCiL/ZwWb7HX7MZhIAkx0Iv02PN/vRVAKYbdkToGhPyiS0sA1+sZQzYwMIVAmDayBNfiMGAj0zGUVCCyECBjSGSQMDAAorjYYMOpSYmZqbnD8sQQA7";
    },
    9300: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "role-layout" },
            [
              a(
                "keep-alive",
                [
                  e.$route.meta.keepAlive ? a("router-view") : e._e(),
                  e._v(">\n    "),
                ],
                1,
              ),
              e.$route.meta.keepAlive ? e._e() : a("router-view"),
            ],
            1,
          );
        },
        l = [],
        r = {
          data: function () {
            return {};
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["default"] = n.exports;
    },
    "9e91": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            { staticClass: "yhdrtzysp" },
            [
              a(
                "page-search",
                [
                  a(
                    "div",
                    { staticStyle: { "font-size": "15px", color: "red" } },
                    [
                      e._v(
                        "Tips：本页面可进行用户导入调整，导入的数据都将进入审批流程，待分公司管理员审批完成后生效!!!",
                      ),
                    ],
                  ),
                  a(
                    "el-form",
                    {
                      staticClass: "form-inline",
                      attrs: { inline: !0, model: e.formParams },
                    },
                    [
                      a(
                        "el-form-item",
                        { attrs: { label: "" } },
                        [
                          a("self-region-tree", {
                            attrs: {
                              treeEl: "qryRegionTree",
                              mode: "1",
                              selectObj: e.regionObj,
                              size: "mini",
                              placeholder: "地区",
                            },
                            on: { dbClickCallBack: e.dbClickCallBack },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        { attrs: { label: "" } },
                        [
                          a(
                            "el-select",
                            {
                              attrs: { size: "mini" },
                              model: {
                                value: e.formParams.state,
                                callback: function (t) {
                                  e.$set(e.formParams, "state", t);
                                },
                                expression: "formParams.state",
                              },
                            },
                            [
                              a("el-option", {
                                attrs: { label: "待审批", value: "10B" },
                              }),
                              a("el-option", {
                                attrs: { label: "审批通过", value: "10A" },
                              }),
                              a("el-option", {
                                attrs: { label: "审批驳回", value: "10C" },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        { attrs: { label: "" } },
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                icon: "el-icon-search",
                                size: "mini",
                              },
                              on: { click: e.searchInfo },
                            },
                            [e._v("查询")],
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                type: "warning",
                                icon: "el-icon-upload2",
                                size: "mini",
                              },
                              on: {
                                click: function (t) {
                                  return e.importInfo();
                                },
                              },
                            },
                            [e._v("导入")],
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                type: "warning",
                                icon: "el-icon-download",
                                size: "mini",
                              },
                              on: {
                                click: function (t) {
                                  return e.exportInfo();
                                },
                              },
                            },
                            [e._v("导出")],
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          1 == e.isShow
                            ? a(
                                "el-button",
                                {
                                  attrs: { type: "primary", size: "mini" },
                                  on: {
                                    click: function (t) {
                                      return e.toApproval();
                                    },
                                  },
                                },
                                [e._v("审核")],
                              )
                            : e._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "page-content",
                [
                  a(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.tableDataLoading,
                          expression: "tableDataLoading",
                        },
                      ],
                      ref: "table",
                      staticStyle: { width: "100%" },
                      attrs: {
                        height: e.tableHeight,
                        data: e.tableData,
                        size: "small",
                        stripe: "",
                        border: "",
                        "highlight-current-row": "",
                        "element-loading-text": "数据加载中，请稍后！",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background":
                          "rgba(255, 255, 255, 0.8)",
                      },
                      on: {
                        "current-change": e.handleCurrentChange,
                        "selection-change": e.handleSelectionChange,
                      },
                    },
                    [
                      a("el-table-column", {
                        attrs: { type: "selection", width: "55" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "regionName", label: "本地网" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "servId", label: "servId" },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "oldBssOrgName",
                          label: "申请调整前营销网格",
                          width: "130",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "newBssOrgName",
                          label: "申请调整至营销网格",
                          width: "130",
                        },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "applyStaffName", label: "申请人" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "applyDate", label: "申请时间" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "reason", label: "申请原因" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "approvalStaffName", label: "审批人" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "approvalDate", label: "审批时间" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "approvalOpinion", label: "审批意见" },
                      }),
                      a("el-table-column", {
                        attrs: { prop: "stateName", label: "审批状态" },
                      }),
                    ],
                    1,
                  ),
                  a(
                    "div",
                    { staticClass: "block" },
                    [
                      a("el-pagination", {
                        attrs: {
                          background: "",
                          "current-page": e.formParams.pageNum,
                          "page-sizes": [10, 30, 50, 100, 300, 500],
                          "page-size": e.formParams.pageSize,
                          layout: "total, sizes, prev, pager, next, jumper",
                          total: e.total,
                        },
                        on: {
                          "size-change": e.sizeChange,
                          "current-change": e.currentChange,
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e.dialogUpload.visible
                ? a(
                    "importSteps",
                    {
                      ref: "upload",
                      attrs: {
                        top: "4%",
                        dialog: e.dialogUpload,
                        action: e.url,
                        extraData: e.dialogUpload.uploadForm,
                        accept: ".xls,.xlsx",
                        attachmentId: e.dialogUpload.attachmentId,
                      },
                      on: {
                        upload: e.submitUpload,
                        successCallBack: e.successUploadCallBack,
                      },
                    },
                    [
                      a(
                        "el-form",
                        {
                          ref: "uploadForm",
                          staticClass: "function-dialog-form",
                          attrs: {
                            model: e.dialogUpload.uploadForm,
                            "status-icon": "",
                            "label-position": "right",
                            "label-width": "0px",
                          },
                        },
                        [
                          a(
                            "el-row",
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20, offset: 2 } },
                                [
                                  a(
                                    "el-form-item",
                                    { attrs: { label: "", prop: "" } },
                                    [
                                      a(
                                        "div",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                            "margin-top": "-35px",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(
                                                e.dialogUpload.remarkInfo.title,
                                              ) +
                                              ":\n            ",
                                          ),
                                        ],
                                      ),
                                      e._l(
                                        e.dialogUpload.remarkInfo.text,
                                        function (t) {
                                          return a("div", {
                                            key: t.index,
                                            staticStyle: {
                                              "line-height": "25px",
                                            },
                                            domProps: { innerHTML: e._s(t) },
                                          });
                                        },
                                      ),
                                    ],
                                    2,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : e._e(),
              e.dialogFormVisible
                ? a(
                    "el-dialog",
                    {
                      attrs: {
                        title: "机构调整审批",
                        visible: e.dialogFormVisible,
                        center: "",
                        width: "30%",
                      },
                      on: {
                        "update:visible": function (t) {
                          e.dialogFormVisible = t;
                        },
                      },
                    },
                    [
                      a(
                        "el-form",
                        { attrs: { model: e.approvalObj } },
                        [
                          a(
                            "el-form-item",
                            { attrs: { label: "审批结果:" } },
                            [
                              a(
                                "el-radio",
                                {
                                  staticStyle: { "margin-left": "55px" },
                                  attrs: { label: "10A" },
                                  model: {
                                    value: e.approvalObj.approvalState,
                                    callback: function (t) {
                                      e.$set(e.approvalObj, "approvalState", t);
                                    },
                                    expression: "approvalObj.approvalState",
                                  },
                                },
                                [e._v("同意")],
                              ),
                              a(
                                "el-radio",
                                {
                                  attrs: { label: "10C" },
                                  model: {
                                    value: e.approvalObj.approvalState,
                                    callback: function (t) {
                                      e.$set(e.approvalObj, "approvalState", t);
                                    },
                                    expression: "approvalObj.approvalState",
                                  },
                                },
                                [e._v("不同意")],
                              ),
                            ],
                            1,
                          ),
                          a("br"),
                          a(
                            "el-form-item",
                            { attrs: { label: "审批意见:" } },
                            [
                              a("el-input", {
                                staticStyle: { width: "220px" },
                                attrs: {
                                  size: "small",
                                  type: "textarea",
                                  rows: 4,
                                  autocomplete: "off",
                                },
                                model: {
                                  value: e.approvalObj.remark,
                                  callback: function (t) {
                                    e.$set(e.approvalObj, "remark", t);
                                  },
                                  expression: "approvalObj.remark",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "div",
                        {
                          staticClass: "dialog-footer",
                          attrs: { slot: "footer" },
                          slot: "footer",
                        },
                        [
                          a(
                            "el-button",
                            {
                              attrs: { type: "primary", size: "small" },
                              on: { click: e.ApprovalSubmit },
                            },
                            [e._v("确 定")],
                          ),
                          a(
                            "el-button",
                            {
                              attrs: { size: "small" },
                              on: { click: e.closeDialog },
                            },
                            [e._v("取 消")],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : e._e(),
              1 == e.partExportDialog.visible
                ? a("part-export", { attrs: { dialog: e.partExportDialog } })
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("1f8b"),
        s = a("61c0"),
        o = a("25be"),
        n = a("b418"),
        c = a("4852"),
        d = {
          components: {
            SelfRegionTree: o["a"],
            UploadFile: n["a"],
            importSteps: r["a"],
            PartExport: c["a"],
          },
          data: function () {
            return {
              tableHeight: 400,
              tableDataLoading: !1,
              total: 0,
              tableData: [],
              formParams: {
                pageNum: 1,
                pageSize: 10,
                regionId: "",
                state: "10B",
              },
              regionObj: { regionId: "", regionName: "" },
              dialogUpload: {
                visible: !1,
                tableData: [],
                attachmentId: 1,
                finished: !1,
                title: "",
                remarkInfo: {
                  title: "格式说明",
                  text: [
                    "1.请按照模版格式填写数据（不能改变各列的排列顺序，只能填写在第1张工作表中；第1行为标题栏，系统将从第2行开始读取数据）。",
                    "2.每次导入数据量不能超过2000条。",
                  ],
                },
                uploadForm: {
                  remark: null,
                  impDesc: "",
                  impType: "",
                  serviceName: "",
                },
              },
              approvalObj: {
                remark: "",
                approvalState: "",
                multipleSelection: [],
              },
              dialogFormVisible: !1,
              isShow: 2,
              partExportDialog: {
                visible: !1,
                params: null,
                serviceName: "bssOrgManage/qryYhdrtzysp",
                exportService: "bssOrgManage/exportYhdrtzysp",
                total: 0,
                loading: !1,
              },
            };
          },
          mounted: function () {
            var e = JSON.parse(s["a"].getLocalStorage("loginJobParams"));
            (this.formParams.regionId = e.regionId),
              (this.regionObj.regionId = e.regionId),
              (this.regionObj.regionName = e.orgLevel + "." + e.regionName);
            var t = e.roleId,
              a = e.orgLevel;
            console.log(t, a),
              (this.isShow =
                ("R02" != t && "R022" != t && "R01" != t) || (1 != a && 2 != a)
                  ? 2
                  : 1),
              this.searchInfo();
          },
          methods: {
            exportInfo: function () {
              (this.partExportDialog.total = this.total),
                (this.partExportDialog.visible = !0),
                (this.partExportDialog.params = this.formParams),
                (this.partExportDialog.loading =
                  0 == this.total || "" == this.total);
            },
            toApproval: function () {
              0 == this.approvalObj.multipleSelection.size
                ? this.$message({
                    showClose: !1,
                    message: "请选择一条数据！",
                    type: "warning",
                  })
                : "10B" != this.approvalObj.multipleSelection[0].state
                  ? this.$message({
                      showClose: !1,
                      message: "请选择待审批数据进行审批！",
                      type: "warning",
                    })
                  : (this.dialogFormVisible = !0);
            },
            ApprovalSubmit: function () {
              var e = this;
              "" == this.approvalObj.remark ||
              "" == this.approvalObj.approvalState
                ? this.$message({
                    showClose: !1,
                    message: "请填写审批结果与审批意见！",
                    type: "warning",
                  })
                : this.$http
                    .post("/bssOrgManage/ApprovalSubmit", this.approvalObj)
                    .then(function (t) {
                      t.success &&
                        (e.getTableData(),
                        e.$message({ message: "操作成功!", type: "success" })),
                        (e.dialogFormVisible = !1),
                        e.getTableData();
                    })
                    .catch(function (t) {
                      e.dialogFormVisible = !1;
                    });
            },
            closeDialog: function () {
              this.dialogFormVisible = !1;
            },
            searchInfo: function () {
              (this.formParams.pageNum = 1), this.getTableData();
            },
            getTableData: function () {
              var e = this;
              (this.tableDataLoading = !0),
                this.$http
                  .post("/bssOrgManage/qryYhdrtzysp", this.formParams)
                  .then(function (t) {
                    t.success &&
                      ((e.total = t.data.total), (e.tableData = t.data.list)),
                      (e.tableDataLoading = !1);
                  })
                  .catch(function (t) {
                    e.tableDataLoading = !1;
                  });
            },
            handleCurrentChange: function (e) {},
            handleSelectionChange: function (e) {
              (this.approvalObj.multipleSelection = e),
                console.log(this.approvalObj.multipleSelection);
            },
            importInfo: function () {
              (this.url = "qry/importEasyexcelInfo"),
                (this.dialogUpload.attachmentId = 601226),
                (this.dialogUpload.title = "用户调整申请"),
                (this.dialogUpload.uploadForm.impDesc = "用户调整申请导入"),
                (this.dialogUpload.uploadForm.serviceName = "importYhdrtzKsj"),
                (this.dialogUpload.visible = !0),
                (this.dialogUpload.finished = !1);
            },
            submitUpload: function () {
              (this.dialogUpload.finished = !1),
                this.$refs.upload.submitUpload(function (e) {});
            },
            successUploadCallBack: function (e) {},
            dbClickCallBack: function () {
              this.formParams.regionId = this.regionObj.regionId;
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            currentChange: function (e) {
              (this.formParams.pageNum = e), this.getTableData();
            },
          },
        },
        p = d,
        m = a("2877"),
        h = Object(m["a"])(p, i, l, !1, null, null, null);
      t["default"] = h.exports;
    },
    a95e: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "role-layout" },
            [
              a(
                "keep-alive",
                [
                  e.$route.meta.keepAlive ? a("router-view") : e._e(),
                  e._v(">\n    "),
                ],
                1,
              ),
              e.$route.meta.keepAlive ? e._e() : a("router-view"),
            ],
            1,
          );
        },
        l = [],
        r = {
          data: function () {
            return {};
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["default"] = n.exports;
    },
    aa77: function (e, t, a) {
      var i = a("5ca1"),
        l = a("be13"),
        r = a("79e5"),
        s = a("fdef"),
        o = "[" + s + "]",
        n = "​",
        c = RegExp("^" + o + o + "*"),
        d = RegExp(o + o + "*$"),
        p = function (e, t, a) {
          var l = {},
            o = r(function () {
              return !!s[e]() || n[e]() != n;
            }),
            c = (l[e] = o ? t(m) : s[e]);
          a && (l[a] = c), i(i.P + i.F * o, "String", l);
        },
        m = (p.trim = function (e, t) {
          return (
            (e = String(l(e))),
            1 & t && (e = e.replace(c, "")),
            2 & t && (e = e.replace(d, "")),
            e
          );
        });
      e.exports = p;
    },
    ab4a: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "section",
            { staticClass: "channel-org-navi-container" },
            [
              a(
                "page-content",
                { attrs: { size: "mini" } },
                [
                  a(
                    "el-row",
                    [
                      a(
                        "el-col",
                        { attrs: { span: 10 } },
                        [
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                              },
                            },
                            [
                              a("el-col", { attrs: { span: 2 } }, [
                                a("i", {
                                  staticClass: "el-icon-star-on",
                                  staticStyle: {
                                    "font-size": "28px",
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(1);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建四级穿"),
                                          a("BR"),
                                          e._v("透管理树(1-4级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(2);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建渠道销售点、"),
                                          a("BR"),
                                          e._v("员工数据(6-7级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(3);
                                            },
                                          },
                                        },
                                        [
                                          e._v("销售点(6级)映"),
                                          a("BR"),
                                          e._v("射到支局(4级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-bottom-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                              },
                            },
                            [
                              a("el-col", { attrs: { span: 2 } }, [
                                a("i", {
                                  staticClass: "el-icon-star-on",
                                  staticStyle: {
                                    "font-size": "28px",
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a("el-col", { attrs: { span: 8 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(4);
                                            },
                                          },
                                        },
                                        [
                                          e._v("班组认领支局、"),
                                          a("BR"),
                                          e._v("责任人维护"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(5);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建营销网格"),
                                          a("BR"),
                                          e._v("(7级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "el-col",
                                { attrs: { span: 1 } },
                                [
                                  a(
                                    "el-row",
                                    { staticStyle: { height: "50%" } },
                                    [
                                      a("i", {
                                        staticClass: "el-icon-top-right",
                                        staticStyle: {
                                          width: "100%",
                                          "text-align": "center",
                                          "line-height": "26px",
                                        },
                                      }),
                                    ],
                                  ),
                                  a(
                                    "el-row",
                                    { staticStyle: { height: "50%" } },
                                    [
                                      a("i", {
                                        staticClass: "el-icon-bottom-right",
                                        staticStyle: {
                                          width: "100%",
                                          "text-align": "center",
                                          "line-height": "26px",
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "10px",
                                "padding-bottom": "10px",
                              },
                            },
                            [
                              a("el-col", { attrs: { span: 2 } }, [
                                a("i", {
                                  staticClass: "el-icon-star-on",
                                  staticStyle: {
                                    "font-size": "28px",
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(6);
                                            },
                                          },
                                        },
                                        [
                                          e._v("清理资源标准"),
                                          a("BR"),
                                          e._v("地址"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(7);
                                            },
                                          },
                                        },
                                        [
                                          e._v("物理网格单元"),
                                          a("BR"),
                                          e._v("上图"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                              a(
                                "el-col",
                                { attrs: { span: 6 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(8);
                                            },
                                          },
                                        },
                                        [
                                          e._v("构建营销网格"),
                                          a("BR"),
                                          e._v("单元(8级)"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 1 } }, [
                                a("i", {
                                  staticClass: "el-icon-top-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-col",
                        { attrs: { span: 3 } },
                        [
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "40px",
                                "padding-bottom": "20px",
                              },
                            },
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: {
                                            width: "100%",
                                            height: "52px",
                                          },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(9);
                                            },
                                          },
                                        },
                                        [e._v("认领包区责任人")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 4 } }, [
                                a("i", {
                                  staticClass: "el-icon-bottom-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "el-row",
                            {
                              staticStyle: {
                                "padding-top": "14px",
                                "padding-bottom": "20px",
                              },
                            },
                            [
                              a(
                                "el-col",
                                { attrs: { span: 20 } },
                                [
                                  a(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        effect: "dark",
                                        content: "Top Left 提示文字",
                                      },
                                    },
                                    [
                                      a(
                                        "el-button",
                                        {
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            type: "primary",
                                            icon: "el-icon-setting",
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.chooseFun(10);
                                            },
                                          },
                                        },
                                        [
                                          e._v("选择包区下级营"),
                                          a("BR"),
                                          e._v("销网格单元"),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("el-col", { attrs: { span: 4 } }, [
                                a("i", {
                                  staticClass: "el-icon-top-right",
                                  staticStyle: {
                                    width: "100%",
                                    "text-align": "center",
                                    "line-height": "52px",
                                  },
                                }),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "el-col",
                        { attrs: { span: 1 } },
                        [
                          a(
                            "el-row",
                            { staticStyle: { "padding-top": "82px" } },
                            [
                              a("i", {
                                staticClass: "el-icon-star-on",
                                staticStyle: {
                                  "font-size": "28px",
                                  width: "100%",
                                  "text-align": "center",
                                  "line-height": "52px",
                                },
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = {
          data: function () {
            return {};
          },
          created: function () {},
          mounted: function () {},
          methods: {
            chooseFun: function (e) {
              1 == e
                ? this.$router.push({
                    path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/bssOrgManage4",
                    query: {},
                  })
                : 2 == e
                  ? this.$router.push({
                      path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/salePointManage",
                      query: {},
                    })
                  : 3 == e
                    ? this.$router.push({
                        path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/saleToZjMapping",
                        query: {},
                      })
                    : 4 == e
                      ? this.$router.push({
                          path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/staffRelBZMag",
                          query: {},
                        })
                      : 5 == e
                        ? this.$router.push({
                            path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/bssOrgMapping",
                            query: {},
                          })
                        : 6 == e &&
                          this.$router.push({
                            path: "/hxcb/gridManagement/salesSupport/channelOrgNavi/cleanStandAddr",
                            query: {},
                          });
            },
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["default"] = n.exports;
    },
    acf9: function (e, t, a) {},
    b418: function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "upload-file" },
            [
              a(
                "el-dialog",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading",
                      value: e.uploadLoading,
                      expression: "uploadLoading",
                    },
                  ],
                  staticClass: "function-dialog",
                  attrs: {
                    width: "60%",
                    top: e.top,
                    visible: e.dialog.visible,
                    "element-loading-text": "数据导入中......",
                    "element-loading-spinner": "el-icon-loading",
                    "element-loading-background": "rgba(255, 255, 255, 0.8)",
                  },
                  on: {
                    "update:visible": function (t) {
                      return e.$set(e.dialog, "visible", t);
                    },
                    close: e.handleDialogClose,
                  },
                },
                [
                  a(
                    "div",
                    {
                      staticClass: "function-dialog-form-title",
                      attrs: { slot: "title" },
                      slot: "title",
                    },
                    [a("strong", [e._v(e._s(e.dialog.title))])],
                  ),
                  e._t("default"),
                  a(
                    "el-upload",
                    {
                      ref: "upload",
                      staticClass: "el-upload-custome",
                      attrs: {
                        drag: "",
                        "list-type": "picture",
                        multiple: !1,
                        limit: 1,
                        data: e.extraData,
                        "with-credentials": !0,
                        action: e.actionUrl,
                        headers: e.headers,
                        accept: e.accept,
                        "on-success": e.handleSuccess,
                        "on-error": e.handleError,
                        "on-exceed": e.handleExceed,
                        "on-change": e.handleChange,
                        "on-progress": e.handleProgress,
                        "before-upload": e.beforeUpload,
                        "auto-upload": !1,
                      },
                    },
                    [
                      a("i", { staticClass: "el-icon-upload" }),
                      a("div", { staticClass: "el-upload__text" }, [
                        e._v(
                          e._s(
                            e.dialog.upload__text
                              ? e.dialog.upload__text
                              : "点击上传",
                          ),
                        ),
                      ]),
                      a(
                        "div",
                        {
                          staticClass: "el-upload__tip",
                          attrs: { slot: "tip" },
                          slot: "tip",
                        },
                        [
                          e._v(
                            "\n        " +
                              e._s(
                                e.dialog.upload__tip
                                  ? e.dialog.upload__tip
                                  : "注意：目前只支持上传xls文件，且不超过10MB",
                              ) +
                              "\n        ",
                          ),
                          e.attachmentId
                            ? a(
                                "el-button",
                                {
                                  attrs: { type: "text" },
                                  on: { click: e.downloadTemplate },
                                },
                                [e._v("【导入模板下载】")],
                              )
                            : e._e(),
                          e.templateInsId
                            ? a(
                                "el-button",
                                {
                                  attrs: { type: "text" },
                                  on: { click: e.downloadTemplateIns },
                                },
                                [e._v("【导入模板说明下载】")],
                              )
                            : e._e(),
                        ],
                        1,
                      ),
                    ],
                  ),
                  e._t("table"),
                  a(
                    "span",
                    {
                      staticClass: "dialog-footer",
                      attrs: { slot: "footer" },
                      slot: "footer",
                    },
                    [
                      a(
                        "el-button",
                        {
                          attrs: { type: "primary", size: "small" },
                          nativeOn: {
                            click: function (t) {
                              return e.upload();
                            },
                          },
                        },
                        [e._v(e._s(e.uploadBottonText))],
                      ),
                      a(
                        "el-button",
                        {
                          attrs: { size: "small" },
                          nativeOn: {
                            click: function (t) {
                              return e.handleDialogClose(t);
                            },
                          },
                        },
                        [e._v("取消")],
                      ),
                    ],
                    1,
                  ),
                ],
                2,
              ),
            ],
            1,
          );
        },
        l = [],
        r = (a("8e6e"), a("ac6a"), a("456d"), a("7f7f"), a("aef6"), a("bd86")),
        s = (a("c5f6"), a("e244")),
        o = a.n(s),
        n = a("fa48"),
        c = a.n(n),
        d = a("3eec"),
        p = a.n(d),
        m = a("c096"),
        h = a.n(m),
        g = a("2f62"),
        u = a("13f4");
      function b(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(a, !0).forEach(function (t) {
                Object(r["a"])(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : b(a).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t),
                  );
                });
        }
        return e;
      }
      var v = {
          name: "UploadFile",
          props: {
            dialog: Object,
            action: { type: String, default: "#" },
            accept: {
              type: String,
              default:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",
            },
            extraData: Object,
            attachmentId: { type: Number, default: null },
            templateInsId: { type: Number, default: null },
            limitSize: { type: Number, default: 10 },
            uploadBottonText: { type: String, default: "开始上传" },
            top: { type: String },
          },
          data: function () {
            return { headers: {}, uploadLoading: !1 };
          },
          computed: f(
            {
              actionUrl: function () {
                return u["a"].BASE_URL + this.action;
              },
            },
            Object(g["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          created: function () {
            this.headers = { Authorization: "Bearer " + this.token };
          },
          mounted: function () {},
          methods: {
            upload: function () {
              this.$emit("upload");
            },
            submitUpload: function () {
              var e = !0;
              0 != this.$refs.upload.uploadFiles.length
                ? e && this.$refs.upload.submit()
                : this.$message({
                    showClose: !0,
                    message: "请点击上传文件!",
                    type: "warning",
                  });
            },
            beforeUpload: function (e) {
              var t = e.size / 1024 / 1024 > this.limitSize;
              return (
                t &&
                  this.$message({
                    showClose: !0,
                    duration: 0,
                    message:
                      "上传文件大小不能超过【" + this.limitSize + "MB】!",
                    type: "warning",
                  }),
                !t
              );
            },
            handleProgress: function () {
              this.uploadLoading = !0;
            },
            handleChange: function (e) {
              e.name.endsWith(".doc") || e.name.endsWith(".docx")
                ? (e.url = c.a)
                : e.name.endsWith(".xls") || e.name.endsWith(".xlsx")
                  ? (e.url = o.a)
                  : e.name.endsWith(".pdf")
                    ? (e.url = p.a)
                    : (e.url = h.a);
            },
            handleExceed: function () {
              this.$message({
                showClose: !0,
                message: "导入文件个数超出限制！",
                type: "warning",
              });
            },
            handleSuccess: function (e, t) {
              (this.uploadLoading = !1),
                null != e &&
                  ("success" === e.status || e.success
                    ? (e.failNum
                        ? this.$message({
                            showClose: !0,
                            duration: 0,
                            message:
                              "文件【" +
                              t.name +
                              "】导入成功！ 成功:" +
                              e.successNum +
                              "条,失败：" +
                              e.failNum +
                              "条.可前往导入历史中查询导入失败原因",
                            type: "success",
                          })
                        : this.$message({
                            showClose: !0,
                            duration: 0,
                            message: "文件【" + t.name + "】导入成功！",
                            type: "success",
                          }),
                      this.$parent.$refs.uploadForm &&
                        (this.$parent.uploadForm =
                          this.$parent.$options.data().uploadForm),
                      this.$refs.upload.clearFiles(),
                      this.$emit("successCallBack", e))
                    : (this.$refs.upload.clearFiles(),
                      this.$message({
                        showClose: !0,
                        duration: 0,
                        message: e.message
                          ? e.message
                          : "文件【" + t.name + "】导入失败，请重新尝试！",
                        type: "error",
                      }),
                      this.$emit("errorCallBack")));
            },
            handleError: function (e, t) {
              (this.uploadLoading = !1),
                this.$message({
                  showClose: !0,
                  duration: 0,
                  message: "文件【" + t.name + "】导入失败，请重新尝试！",
                  type: "error",
                }),
                this.$emit("errorCallBack");
            },
            handleDialogClose: function () {
              this.$parent.$refs.uploadForm &&
                (this.$parent.uploadForm =
                  this.$parent.$options.data().uploadForm),
                (this.dialog.visible = !1),
                this.$emit("handleDialogClose");
            },
            downloadTemplate: function () {
              (void 0 !== this.extraData.impDesc &&
                "" !== this.extraData.impDesc) ||
                (this.extraData.impDesc = "未命名"),
                "" != this.attachmentId &&
                  this.$export.exportFilePost(
                    "/download",
                    { attachmentId: this.attachmentId },
                    this.extraData.impDesc,
                  );
            },
            downloadTemplateIns: function () {
              (void 0 !== this.extraData.impDesc &&
                "" !== this.extraData.impDesc) ||
                (this.extraData.impDesc = "未命名"),
                "" != this.templateInsId &&
                  this.$export.exportFilePost(
                    "/download",
                    { attachmentId: this.templateInsId },
                    this.extraData.impDesc + "模板说明",
                  );
            },
          },
        },
        y = v,
        x = (a("084e"), a("2877")),
        O = Object(x["a"])(y, i, l, !1, null, null, null);
      t["a"] = O.exports;
    },
    bfd1: function (e, t, a) {},
    bfe8: function (e, t, a) {
      "use strict";
      var i = a("75da"),
        l = a.n(i);
      l.a;
    },
    c096: function (e, t, a) {
      e.exports = a.p + "assets/img/file.324a030e.jpeg";
    },
    c5f6: function (e, t, a) {
      "use strict";
      var i = a("7726"),
        l = a("69a8"),
        r = a("2d95"),
        s = a("5dbc"),
        o = a("6a99"),
        n = a("79e5"),
        c = a("9093").f,
        d = a("11e9").f,
        p = a("86cc").f,
        m = a("aa77").trim,
        h = "Number",
        g = i[h],
        u = g,
        b = g.prototype,
        f = r(a("2aeb")(b)) == h,
        v = "trim" in String.prototype,
        y = function (e) {
          var t = o(e, !1);
          if ("string" == typeof t && t.length > 2) {
            t = v ? t.trim() : m(t, 3);
            var a,
              i,
              l,
              r = t.charCodeAt(0);
            if (43 === r || 45 === r) {
              if (((a = t.charCodeAt(2)), 88 === a || 120 === a)) return NaN;
            } else if (48 === r) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (i = 2), (l = 49);
                  break;
                case 79:
                case 111:
                  (i = 8), (l = 55);
                  break;
                default:
                  return +t;
              }
              for (var s, n = t.slice(2), c = 0, d = n.length; c < d; c++)
                if (((s = n.charCodeAt(c)), s < 48 || s > l)) return NaN;
              return parseInt(n, i);
            }
          }
          return +t;
        };
      if (!g(" 0o1") || !g("0b1") || g("+0x1")) {
        g = function (e) {
          var t = arguments.length < 1 ? 0 : e,
            a = this;
          return a instanceof g &&
            (f
              ? n(function () {
                  b.valueOf.call(a);
                })
              : r(a) != h)
            ? s(new u(y(t)), a, g)
            : y(t);
        };
        for (
          var x,
            O = a("9e1e")
              ? c(u)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ",",
                ),
            N = 0;
          O.length > N;
          N++
        )
          l(u, (x = O[N])) && !l(g, x) && p(g, x, d(u, x));
        (g.prototype = b), (b.constructor = g), a("2aba")(i, h, g);
      }
    },
    ca2b: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            [
              a(
                "page-search",
                [
                  a(
                    "el-form",
                    { ref: "form", attrs: { inline: !0 } },
                    [
                      a(
                        "el-form-item",
                        [
                          a("self-org-tree", {
                            ref: "selfOrgTree",
                            attrs: {
                              mode: "1",
                              selectObj: e.orgObj,
                              size: "mini",
                              placeholder: "组织机构",
                            },
                            on: { clickCallBack: e.clickCallBack },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: {
                              placeholder: "用户ID",
                              size: "mini",
                              clearable: "",
                            },
                            model: {
                              value: e.servId,
                              callback: function (t) {
                                e.servId = t;
                              },
                              expression: "servId",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a("el-input", {
                            attrs: {
                              placeholder: "号码",
                              size: "mini",
                              clearable: "",
                            },
                            model: {
                              value: e.sevrAccNbr,
                              callback: function (t) {
                                e.sevrAccNbr = t;
                              },
                              expression: "sevrAccNbr",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "el-form-item",
                        [
                          a(
                            "el-button",
                            {
                              attrs: {
                                size: "mini",
                                type: "primary",
                                icon: "el-icon-search",
                              },
                              on: { click: e.getTableData },
                            },
                            [e._v("查询")],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "page-content",
                [
                  a(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.tableDataLoading,
                          expression: "tableDataLoading",
                        },
                      ],
                      ref: "table",
                      staticStyle: { width: "100%" },
                      attrs: {
                        data: e.tableData,
                        height: e.tableHeight,
                        size: "small",
                        stripe: "",
                        border: "",
                        "highlight-current-row": "",
                        "element-loading-text": "数据加载中，请稍后！",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background":
                          "rgba(255, 255, 255, 0.8)",
                      },
                    },
                    [
                      a("el-table-column", {
                        attrs: {
                          prop: "servId",
                          label: "用户ID",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "servAccNbr",
                          label: "号码",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "finishTime",
                          label: "竣工时间",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "regionName",
                          label: "分公司",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "addrName",
                          label: "九级地址",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "segmId06Name",
                          label: "六级地址",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "gisid",
                          label: "GISID",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "orgId",
                          label: "网格ID",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "orgName",
                          label: "网格名称",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "rlOrgId",
                          label: "认领表格ID",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "rlOrgName",
                          label: "认领表格名称",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "partMeth",
                          label: "认领方式",
                          align: "center",
                          width: "100",
                        },
                      }),
                      a("el-table-column", {
                        attrs: {
                          prop: "rlTime",
                          label: "认领时间",
                          align: "center",
                          width: "100",
                        },
                      }),
                    ],
                    1,
                  ),
                  a(
                    "div",
                    { staticStyle: { "text-align": "center" } },
                    [
                      a("el-pagination", {
                        attrs: {
                          background: "",
                          layout: "total, sizes, prev, pager, next, jumper",
                          total: e.total,
                          "page-size": e.formParams.pageSize,
                          "current-page": e.formParams.pageNum,
                          "page-sizes": [10, 30, 50, 100, 300, 500],
                        },
                        on: {
                          "current-change": e.currentChange,
                          "size-change": e.sizeChange,
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        r = a("4e3c"),
        s = a("8b98"),
        o = a("4b4b"),
        n = {
          components: {
            PageContent: s["a"],
            PageSearch: r["a"],
            selfOrgTree: o["a"],
          },
          data: function () {
            return {
              tableData: [
                {
                  servId: "1",
                  sevrAccNbr: "15689487598",
                  finishTime: "2001-01-01",
                  fegionName: "",
                  addrName: "",
                  segmId06Name: "",
                  GISID: "",
                  orgId: "",
                  orgName: "",
                  rlOrgId: "",
                  rlOrgName: "",
                  partMeth: "",
                  rlTime: "",
                },
              ],
              total: 0,
              tableDataLoading: !1,
              tableHeight: 400,
              formParams: {
                pageNum: 1,
                pageSize: 10,
                bssOrgId: "",
                servId: "",
                sevrAccNbr: "",
              },
              orgObj: { orgId: "", orgName: "", orgLevel: "", regionId: "" },
            };
          },
          methods: {
            getTableData: function () {
              var e = this;
              (this.tableDataLoading = !0),
                null !== this.orgObj.orgId && "" != this.orgObj.orgId
                  ? (this.formParams.bssOrgId = this.orgObj.orgId)
                  : (this.formParams.bssOrgId = 843e12);
              var t = this.formParams;
              this.$http
                .post(
                  "/hxcb/gridmanagement/custclaimmanage/userlevel6address/getlist",
                  t,
                )
                .then(function (t) {
                  t.success &&
                    ((e.total = t.data.total), (e.tableData = t.data.list)),
                    (e.tableDataLoading = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading = !1;
                });
            },
            handleClick: function (e, t) {
              var a = this.formParams;
              (a.qryType = t),
                (a.gridManager = e.gridManager),
                this.$router.push({
                  path: "/marketlibrary/netAbility/wifiCoverSituation/wifiDetail",
                  query: a,
                });
            },
            currentChange: function (e) {
              (this.formParams.pageNum = e), this.getTableData();
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            clickCallBack: function () {
              this.formParams.bssOrgId = this.orgObj.orgId;
            },
          },
        },
        c = n,
        d = a("2877"),
        p = Object(d["a"])(c, i, l, !1, null, null, null);
      t["default"] = p.exports;
    },
    cef6: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "section",
            { staticClass: "cust-pre-claim-container" },
            [
              i(
                "el-row",
                { staticStyle: { position: "inherit" } },
                [
                  i(
                    "el-col",
                    { attrs: { span: 17 } },
                    [
                      i(
                        "page-search",
                        [
                          i(
                            "el-form",
                            {
                              staticClass: "form-inline",
                              attrs: { inline: !0, model: e.formParams },
                            },
                            [
                              i(
                                "el-form-item",
                                {
                                  staticStyle: {
                                    "margin-right": "0px",
                                    width: "80px",
                                  },
                                  attrs: { label: "" },
                                },
                                [
                                  i(
                                    "el-select",
                                    {
                                      attrs: {
                                        size: "mini",
                                        placeholder: "下级本级",
                                      },
                                      model: {
                                        value: e.formParams.isLowerBssOrg,
                                        callback: function (t) {
                                          e.$set(
                                            e.formParams,
                                            "isLowerBssOrg",
                                            t,
                                          );
                                        },
                                        expression: "formParams.isLowerBssOrg",
                                      },
                                    },
                                    [
                                      i("el-option", {
                                        attrs: { label: "下级", value: "true" },
                                      }),
                                      i("el-option", {
                                        attrs: {
                                          label: "本级",
                                          value: "false",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i("self-org-tree-all", {
                                    staticStyle: { width: "160px" },
                                    attrs: {
                                      treeEl: "leftBssOrgTree",
                                      mode: "1",
                                      selectObj: e.orgObj,
                                      size: "mini",
                                      checkbox: "",
                                      placeholder: "组织机构",
                                    },
                                    on: {
                                      dbClickCallBack: e.dbClickCallBack,
                                      onCheckCallBack: e.onCheckCallBack,
                                    },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i("self-area-tree", {
                                    staticStyle: { width: "160px" },
                                    attrs: {
                                      treeEl: "selfAreaTree",
                                      mode: "1",
                                      selectObj: e.areaObj,
                                      size: "mini",
                                      placeholder: "地区",
                                    },
                                    on: {
                                      dbClickCallBack: e.areaSelectCallBack,
                                    },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i(
                                    "el-select",
                                    {
                                      staticStyle: { width: "160px" },
                                      attrs: {
                                        size: "mini",
                                        clearable: "",
                                        placeholder: "战略分群",
                                      },
                                      model: {
                                        value: e.formParams.stGroupId,
                                        callback: function (t) {
                                          e.$set(e.formParams, "stGroupId", t);
                                        },
                                        expression: "formParams.stGroupId",
                                      },
                                    },
                                    e._l(e.options, function (e) {
                                      return i("el-option", {
                                        key: e.stGroupId,
                                        attrs: {
                                          label: e.label,
                                          value: e.stGroupId,
                                        },
                                      });
                                    }),
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        icon: "el-icon-search",
                                        size: "mini",
                                      },
                                      on: { click: e.searchInfo },
                                    },
                                    [e._v("查询")],
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        icon: "el-icon-download",
                                        size: "mini",
                                      },
                                      on: { click: e.exportInfo },
                                    },
                                    [e._v("导出")],
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i(
                                    "el-button",
                                    {
                                      attrs: {
                                        type: "primary",
                                        icon: "el-icon-arrow-right",
                                        size: "mini",
                                      },
                                      on: {
                                        click: function (t) {
                                          e.drawer = !0;
                                        },
                                      },
                                    },
                                    [e._v("更多查询条件")],
                                  ),
                                  i(
                                    "el-drawer",
                                    {
                                      attrs: {
                                        title: "更多查询条件",
                                        visible: e.drawer,
                                      },
                                      on: {
                                        "update:visible": function (t) {
                                          e.drawer = t;
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "el-form",
                                        {
                                          staticClass: "form-inline",
                                          staticStyle: {
                                            "margin-left": "15px",
                                          },
                                          attrs: {
                                            inline: !0,
                                            model: e.formParams,
                                          },
                                        },
                                        [
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("serv-type-tree", {
                                                staticStyle: { width: "205px" },
                                                attrs: {
                                                  treeEl: "qryservTypeTree",
                                                  mode: "1",
                                                  selectObj: e.servTypeObj,
                                                  size: "small",
                                                  placeholder: "产品大类",
                                                },
                                                on: {
                                                  dbclickCallBack:
                                                    e.dbclickCallBack1,
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  clearable: "",
                                                  placeholder: "产品号码",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams.servAccNbr,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "servAccNbr",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.servAccNbr",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            [
                                              i(
                                                "el-button",
                                                {
                                                  staticStyle: {
                                                    "margin-left": "-10px",
                                                  },
                                                  attrs: { size: "small" },
                                                  on: {
                                                    click: function (t) {
                                                      return e.importInfo1();
                                                    },
                                                  },
                                                },
                                                [
                                                  i("img", {
                                                    attrs: { src: a("87d4") },
                                                  }),
                                                ],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            {
                                              staticStyle: {
                                                "margin-top": "4px",
                                              },
                                              attrs: { label: "" },
                                            },
                                            [
                                              i(
                                                "el-input",
                                                {
                                                  staticStyle: {
                                                    width: "205px",
                                                  },
                                                  attrs: {
                                                    placeholder: "请输入",
                                                    size: "small",
                                                    clearable: "",
                                                  },
                                                  model: {
                                                    value:
                                                      e.formParams.fieldValue,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "fieldValue",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.fieldValue",
                                                  },
                                                },
                                                [
                                                  i(
                                                    "el-select",
                                                    {
                                                      staticStyle: {
                                                        width: "100px",
                                                      },
                                                      attrs: {
                                                        slot: "prepend",
                                                        placeholder: "请选择",
                                                      },
                                                      slot: "prepend",
                                                      model: {
                                                        value:
                                                          e.formParams
                                                            .fieldName,
                                                        callback: function (t) {
                                                          e.$set(
                                                            e.formParams,
                                                            "fieldName",
                                                            t,
                                                          );
                                                        },
                                                        expression:
                                                          "formParams.fieldName",
                                                      },
                                                    },
                                                    [
                                                      i("el-option", {
                                                        attrs: {
                                                          label: "客户编码",
                                                          value: "propCustCode",
                                                        },
                                                      }),
                                                      i("el-option", {
                                                        attrs: {
                                                          label: "产品号码",
                                                          value: "servAccNbr",
                                                        },
                                                      }),
                                                      i("el-option", {
                                                        attrs: {
                                                          label: "合同号",
                                                          value: "acctNbr",
                                                        },
                                                      }),
                                                    ],
                                                    1,
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  clearable: "",
                                                  placeholder: "客户名称",
                                                },
                                                model: {
                                                  value: e.formParams.custName,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "custName",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.custName",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  clearable: "",
                                                  placeholder: "用户地址",
                                                },
                                                model: {
                                                  value: e.formParams.wholeAddr,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "wholeAddr",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.wholeAddr",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  clearable: "",
                                                  placeholder: "揽机号",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams.saleStaffCode,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "saleStaffCode",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.saleStaffCode",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-input", {
                                                attrs: {
                                                  size: "small",
                                                  clearable: "",
                                                  placeholder: "IVPN集团号",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams
                                                      .groupServAccNbr,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "groupServAccNbr",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.groupServAccNbr",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i(
                                                "el-select",
                                                {
                                                  attrs: {
                                                    size: "small",
                                                    clearable: "",
                                                    placeholder: "增量存量",
                                                  },
                                                  model: {
                                                    value:
                                                      e.formParams.newOldType,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "newOldType",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.newOldType",
                                                  },
                                                },
                                                [
                                                  i("el-option", {
                                                    attrs: {
                                                      label: "增量",
                                                      value: "new",
                                                    },
                                                  }),
                                                  i("el-option", {
                                                    attrs: {
                                                      label: "存量",
                                                      value: "old",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-date-picker", {
                                                staticStyle: { width: "205px" },
                                                attrs: {
                                                  type: "date",
                                                  size: "small",
                                                  placeholder: "装机起始日期",
                                                  "value-format": "yyyy-MM-dd",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams.creaDateStart,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "creaDateStart",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.creaDateStart",
                                                },
                                              }),
                                              i("span", [e._v("  ")]),
                                              i("el-date-picker", {
                                                staticStyle: { width: "205px" },
                                                attrs: {
                                                  type: "date",
                                                  size: "small",
                                                  placeholder: "装机结束日期",
                                                  "value-format": "yyyy-MM-dd",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams.creaDateEnd,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "creaDateEnd",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.creaDateEnd",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i("el-date-picker", {
                                                staticStyle: { width: "205px" },
                                                attrs: {
                                                  type: "date",
                                                  size: "small",
                                                  placeholder: "激活起始日期",
                                                  "value-format": "yyyy-MM-dd",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams.stateDateStart,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "stateDateStart",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.stateDateStart",
                                                },
                                              }),
                                              i("span", [e._v("  ")]),
                                              i("el-date-picker", {
                                                staticStyle: { width: "205px" },
                                                attrs: {
                                                  type: "date",
                                                  size: "small",
                                                  placeholder: "激活结束日期",
                                                  "value-format": "yyyy-MM-dd",
                                                },
                                                model: {
                                                  value:
                                                    e.formParams.stateDateEnd,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.formParams,
                                                      "stateDateEnd",
                                                      t,
                                                    );
                                                  },
                                                  expression:
                                                    "formParams.stateDateEnd",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i(
                                                "el-radio",
                                                {
                                                  attrs: { label: "N" },
                                                  model: {
                                                    value:
                                                      e.formParams.isPrePlot,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "isPrePlot",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.isPrePlot",
                                                  },
                                                },
                                                [e._v("未预认领用户")],
                                              ),
                                              i(
                                                "el-radio",
                                                {
                                                  attrs: { label: "Y" },
                                                  model: {
                                                    value:
                                                      e.formParams.isPrePlot,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "isPrePlot",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.isPrePlot",
                                                  },
                                                },
                                                [e._v("已预认领用户")],
                                              ),
                                              i(
                                                "el-radio",
                                                {
                                                  attrs: { label: "A" },
                                                  model: {
                                                    value:
                                                      e.formParams.isPrePlot,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "isPrePlot",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.isPrePlot",
                                                  },
                                                },
                                                [e._v("全部用户")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "el-form-item",
                                            { attrs: { label: "" } },
                                            [
                                              i(
                                                "el-checkbox",
                                                {
                                                  model: {
                                                    value: e.formParams.psState,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "psState",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.psState",
                                                  },
                                                },
                                                [e._v("剔除拆机用户")],
                                              ),
                                              i(
                                                "el-checkbox",
                                                {
                                                  model: {
                                                    value:
                                                      e.formParams.isDisputed,
                                                    callback: function (t) {
                                                      e.$set(
                                                        e.formParams,
                                                        "isDisputed",
                                                        t,
                                                      );
                                                    },
                                                    expression:
                                                      "formParams.isDisputed",
                                                  },
                                                },
                                                [e._v("争议中")],
                                              ),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      i(
                                        "el-button",
                                        {
                                          staticStyle: {
                                            "margin-left": "150px",
                                            "margin-top": "20px",
                                          },
                                          attrs: {
                                            type: "primary",
                                            size: "small",
                                          },
                                          on: { click: e.comfirm },
                                        },
                                        [e._v("确认")],
                                      ),
                                      i(
                                        "el-button",
                                        {
                                          attrs: { size: "small" },
                                          on: { click: e.reset },
                                        },
                                        [e._v("重置")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      i(
                        "page-content",
                        [
                          i(
                            "el-table",
                            {
                              directives: [
                                {
                                  name: "loading",
                                  rawName: "v-loading",
                                  value: e.tableDataLoading,
                                  expression: "tableDataLoading",
                                },
                              ],
                              ref: "table",
                              staticStyle: { width: "100%" },
                              attrs: {
                                height: e.tableHeight,
                                "row-class-name": e.tableRowClassName,
                                data: e.tableData,
                                size: "small",
                                stripe: "",
                                border: "",
                                "highlight-current-row": "",
                                "element-loading-text": "数据加载中，请稍后！",
                                "element-loading-spinner": "el-icon-loading",
                                "element-loading-background":
                                  "rgba(255, 255, 255, 0.8)",
                              },
                              on: {
                                "row-click": e.getRowMessage,
                                "current-change": e.handleCurrentChange,
                              },
                            },
                            [
                              i("el-table-column", {
                                attrs: {
                                  prop: "bssOrgName",
                                  label: "管辖机构",
                                  "show-overflow-tooltip": "",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "preBssOrgName",
                                  label: "预认领机构",
                                  width: "150",
                                },
                                scopedSlots: e._u([
                                  {
                                    key: "default",
                                    fn: function (t) {
                                      return [
                                        i("el-input", {
                                          attrs: { size: "mini", readOnly: "" },
                                          model: {
                                            value: t.row.preBssOrgName,
                                            callback: function (a) {
                                              e.$set(t.row, "preBssOrgName", a);
                                            },
                                            expression:
                                              "scope.row.preBssOrgName",
                                          },
                                        }),
                                      ];
                                    },
                                  },
                                ]),
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "prePlotReason",
                                  label: "预认领原因",
                                  width: "150",
                                },
                                scopedSlots: e._u([
                                  {
                                    key: "default",
                                    fn: function (t) {
                                      return [
                                        i("el-input", {
                                          attrs: {
                                            clearable: "",
                                            size: "mini",
                                          },
                                          model: {
                                            value: t.row.prePlotReason,
                                            callback: function (a) {
                                              e.$set(t.row, "prePlotReason", a);
                                            },
                                            expression:
                                              "scope.row.prePlotReason",
                                          },
                                        }),
                                      ];
                                    },
                                  },
                                ]),
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "adBssOrgName",
                                  label: "推荐机构",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "userName",
                                  label: "用户名",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "servAccNbr",
                                  label: "产品号码",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "groupServAccNbr",
                                  label: "IVPN集团号",
                                  width: "110",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "prePlotStateName",
                                  label: "预认领中",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "isDisputed",
                                  label: "争议中",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "servTypeName",
                                  label: "服务类型名称",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "wholeAddr",
                                  label: "装机地址",
                                  width: "200",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "managerTypeName",
                                  label: "管理类型",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "custName",
                                  label: "产权客户名称",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "stGroupName",
                                  label: "战略分群",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "propCustCode",
                                  label: "产权客户编码",
                                  width: "110",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "acctNbr",
                                  label: "合同号",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "saleStaffCode",
                                  label: "揽机工号",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "saleStaffName",
                                  label: "揽机人",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "creaDate",
                                  label: "装机时间",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "stateDate",
                                  label: "激活时间",
                                  width: "100",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "businessHall",
                                  label: "营业厅",
                                  width: "200",
                                },
                              }),
                              i("el-table-column", {
                                attrs: {
                                  prop: "acceptDate",
                                  label: "受理时间",
                                  width: "100",
                                },
                              }),
                            ],
                            1,
                          ),
                          i(
                            "div",
                            { staticClass: "block" },
                            [
                              i("el-pagination", {
                                attrs: {
                                  background: "",
                                  "current-page": e.formParams.pageNum,
                                  "page-sizes": [10, 30, 50, 100, 300, 500],
                                  "page-size": e.formParams.pageSize,
                                  layout:
                                    "total, sizes, prev, pager, next, jumper",
                                  total: e.total,
                                },
                                on: {
                                  "size-change": e.sizeChange,
                                  "current-change": e.currentChange,
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "el-col",
                    { attrs: { span: 2 } },
                    [
                      i(
                        "el-button",
                        {
                          staticStyle: {
                            "margin-left": "20px",
                            "margin-top": "250px",
                          },
                          attrs: { type: "primary", size: "small" },
                          on: { click: e.preClaimButton },
                        },
                        [e._v("变更")],
                      ),
                      i(
                        "el-button",
                        {
                          staticStyle: {
                            "margin-left": "18px",
                            "margin-top": "20px",
                          },
                          attrs: { type: "primary", size: "small" },
                          on: { click: e.clear },
                        },
                        [e._v("清除")],
                      ),
                      i(
                        "el-button",
                        {
                          staticStyle: {
                            "margin-left": "12px",
                            "margin-top": "20px",
                          },
                          attrs: { type: "primary", size: "small" },
                          on: { click: e.preRenLin },
                        },
                        [e._v("预认领")],
                      ),
                    ],
                    1,
                  ),
                  i(
                    "el-col",
                    { attrs: { span: 5 } },
                    [
                      i(
                        "page-search",
                        {
                          attrs: {
                            bodyStyle: "padding-left: 10px;padding-right:10px;",
                          },
                        },
                        [
                          i(
                            "el-form",
                            {
                              staticClass: "form-inline left-tree-form",
                              attrs: { inline: !0 },
                            },
                            [
                              i(
                                "el-form-item",
                                { attrs: { label: "" } },
                                [
                                  i("self-org-tree-all", {
                                    attrs: {
                                      treeEl: "rightBssOrgTree",
                                      mode: "2",
                                      selectObj: e.selectObj2,
                                      size: "small",
                                      placeholder: "目标机构",
                                    },
                                    on: {
                                      dbClickCallBack: e.dbClickCallBack2,
                                      onCheckCallBack: e.onCheckCallBack2,
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e.dialogUpload.visible
                ? i(
                    "upload-file",
                    {
                      ref: "upload",
                      attrs: {
                        dialog: e.dialogUpload,
                        action: "qry/importInfo",
                        extraData: e.dialogUpload.uploadForm,
                        accept: ".xls,.xlsx",
                        attachmentId: e.dialogUpload.attachmentId,
                      },
                      on: {
                        upload: e.submitUpload,
                        successCallBack: e.successUploadCallBack1,
                      },
                    },
                    [
                      i(
                        "el-form",
                        {
                          ref: "uploadForm",
                          staticClass: "function-dialog-form",
                          attrs: {
                            model: e.dialogUpload.uploadForm,
                            "status-icon": "",
                            rules: e.dialogUpload.uploadRules,
                            "label-position": "right",
                            "label-width": "0px",
                          },
                        },
                        [
                          i(
                            "el-row",
                            [
                              i(
                                "el-col",
                                { attrs: { span: 20, offset: 2 } },
                                [
                                  i(
                                    "el-form-item",
                                    { attrs: { label: "", prop: "" } },
                                    [
                                      i(
                                        "div",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                          },
                                        },
                                        [
                                          e._v(
                                            e._s(
                                              e.dialogUpload.remarkInfo.title,
                                            ) + ":",
                                          ),
                                        ],
                                      ),
                                      e._l(
                                        e.dialogUpload.remarkInfo.text,
                                        function (t) {
                                          return i(
                                            "div",
                                            {
                                              staticStyle: {
                                                "line-height": "25px",
                                              },
                                            },
                                            [e._v(e._s(t))],
                                          );
                                        },
                                      ),
                                    ],
                                    2,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("3dc9"),
        s = a("fe48"),
        o = a("5505"),
        n = a("b418"),
        c = {
          components: {
            SelfOrgTreeAll: s["a"],
            SelfAreaTree: r["a"],
            ServTypeTree: o["a"],
            UploadFile: n["a"],
          },
          data: function () {
            return {
              drawer: !1,
              tableHeight: 400,
              tableDataLoading: !1,
              total: 0,
              tableData: [],
              dataList: [],
              temp: [],
              dialogUpload: {
                visible: !1,
                tableData: [],
                attachmentId: 590875,
                finished: !1,
                title: "批量查询导入",
                remarkInfo: {
                  title: "格式说明",
                  text: [
                    "1.请按照模版格式填写数据（不能改变各列的排列顺序，只能填写在第1张工作表中；第1行为标题栏，系统将从第2行开始读取数据）。",
                    "2.每次导入数据量不能超过10000条。",
                  ],
                },
                uploadForm: {
                  impType: "1",
                  impDesc: "批量查询导入",
                  serviceName: "importManagerUserToSelect",
                },
              },
              options: [
                { stGroupId: "500202891", label: "政企客户" },
                { stGroupId: "500202890", label: "家庭客户" },
                { stGroupId: "500202889", label: "个人" },
                { stGroupId: "500202899", label: "其他" },
                { stGroupId: "500202892", label: "公众客户" },
              ],
              formParams: {
                preBssOrgName: "",
                bssOrgId: "",
                isLowerBssOrg: "true",
                areaId: "",
                stGroupId: "",
                servTypeSort: "",
                servAccNbr: "",
                fieldValue: "",
                fieldName: "propCustCode",
                custName: "",
                wholeAddr: "",
                saleStaffCode: "",
                groupServAccNbr: "",
                newOldType: "",
                creaDateStart: "",
                creaDateEnd: "",
                stateDateStart: "",
                stateDateEnd: "",
                isPrePlot: "N",
                psState: !0,
                isDisputed: !1,
                pageNum: 1,
                pageSize: 10,
              },
              preClaim: { bssOrgId: "", rowId: "", flag: 0 },
              orgObj: { orgId: "", orgName: "", orgLevel: "", regionId: "" },
              areaObj: { areaId: "", areaName: "" },
              servTypeObj: { servTypeSort: "", servTypeSortName: "" },
              selectObj2: {
                orgId: "",
                orgName: "",
                orgLevel: "",
                upOrgIdStr: "",
              },
              selection: {},
              upDateMessage: {
                orgId: "",
                orgName: "",
                orgLevel: "",
                upOrgIdStr: "",
                rowIndex: "",
              },
              selectionIdex: "",
              rowId: "",
            };
          },
          mounted: function () {},
          methods: {
            importInfo1: function () {
              var e = this.$refs.table.selection;
              e &&
                1 == e.length &&
                (this.dialogUpload.uploadForm.modeRuleId = e[0].modeRuleId),
                (this.dialogUpload.visible = !0),
                (this.dialogUpload.finished = !1);
            },
            successCallBack: function () {},
            successUploadCallBack1: function (e) {
              var t = this;
              e.success
                ? ((this.dialogUpload.tableData = e.data),
                  (this.dialogUpload.finished = !0),
                  this.$http
                    .post("manageUser/selectAccNbrData")
                    .then(function (e) {
                      e.success && (t.formParams.servAccNbr = e.data),
                        (t.tableDataLoading = !1),
                        (t.dialogUpload.visible = !1);
                    })
                    .catch(function (e) {
                      t.tableDataLoading = !1;
                    }))
                : this.$message({
                    showClose: !1,
                    message: e.message,
                    type: "error",
                  });
            },
            validationUploadForm: function () {
              var e = !0;
              return (
                this.$refs.uploadForm.validate(function (t) {
                  t || (e = !1);
                }),
                e
              );
            },
            submitUpload: function () {
              (this.dialogUpload.finished = !1),
                this.validationUploadForm() &&
                  this.$refs.upload.submitUpload(function (e) {});
            },
            tableRowClassName: function (e) {
              var t = e.row,
                a = e.rowIndex;
              t.index = a + 1;
            },
            getRowMessage: function (e) {
              this.selectionIdex = e.index;
            },
            searchInfo: function () {
              (this.preClaim.rowId = ""),
                (this.formParams.pageNum = 1),
                this.getTableData();
            },
            getTableData: function () {
              var e = this;
              if ("" == this.formParams.bssOrgId)
                return (
                  this.$message({
                    message: "请选择组织机构！",
                    type: "warning",
                  }),
                  !1
                );
              if ("" == this.formParams.areaId)
                return (
                  this.$message({ message: "请选择地区！", type: "warning" }),
                  !1
                );
              this.tableDataLoading = !0;
              var t = JSON.parse(JSON.stringify(this.formParams));
              this.$http
                .post("custPreClaim/qryServPrePlot", t)
                .then(function (t) {
                  t.success &&
                    ((e.total = t.data.total), (e.tableData = t.data.list)),
                    (e.tableDataLoading = !1);
                })
                .catch(function (t) {
                  e.tableDataLoading = !1;
                });
            },
            exportInfo: function () {
              this.$export.exportExcelPost(
                "custPreClaim/exportPreClaimInfo",
                this.formParams,
                "营销用户预认领",
                "xlsx",
              );
            },
            comfirm: function () {
              this.drawer = !1;
            },
            reset: function () {
              (this.servTypeObj.servTypeSort = ""),
                (this.servTypeObj.servTypeSortName = ""),
                (this.formParams.servTypeSort = ""),
                (this.formParams.servAccNbr = ""),
                (this.formParams.fieldValue = ""),
                (this.formParams.fieldName = "propCustCode"),
                (this.formParams.custName = ""),
                (this.formParams.wholeAddr = ""),
                (this.formParams.saleStaffCode = ""),
                (this.formParams.groupServAccNbr = ""),
                (this.formParams.newOldType = ""),
                (this.formParams.creaDateStart = ""),
                (this.formParams.creaDateEnd = ""),
                (this.formParams.stateDateStart = ""),
                (this.formParams.stateDateEnd = ""),
                (this.formParams.isPrePlot = "N"),
                (this.formParams.psState = !0),
                (this.formParams.isDisputed = !1),
                (this.formParams.orgType = !1);
            },
            preClaimButton: function () {
              return "" == this.selectObj2.orgLevel || "" == this.selectionIdex
                ? (this.$message({
                    message: "请选择想要变更的数据和所选机构",
                    type: "warning",
                  }),
                  !1)
                : 7 != this.selectObj2.orgLevel
                  ? (this.$message({
                      message: "您选择的机构级别过大，请选择第7级机构！",
                      type: "warning",
                    }),
                    !1)
                  : ((this.tableData[this.selectionIdex - 1].preBssOrgName =
                      this.selectObj2.orgName),
                    (this.tableData[this.selectionIdex - 1].preBssOrgId =
                      this.selectObj2.orgId),
                    void this.dataList.push(
                      this.tableData[this.selectionIdex - 1],
                    ));
            },
            clear: function () {
              "" != this.selectionIdex
                ? ((this.tableData[this.selectionIdex - 1].preBssOrgName = ""),
                  this.dataList.splice(
                    this.tableData[this.selectionIdex - 1],
                    1,
                  ),
                  (this.selectionIdex = ""))
                : this.$message({
                    message: "请选中一条记录在进行清除！",
                    type: "warning",
                  });
            },
            preRenLin: function () {
              var e = this;
              if ("" == this.selectObj2.orgLevel || "" == this.selectionIdex)
                return (
                  this.$message({
                    message: "请选择想要变更的数据和所选机构",
                    type: "warning",
                  }),
                  !1
                );
              this.$http
                .post("/custPreClaim/savePrePlotReason", {
                  dataList: this.dataList,
                })
                .then(function (t) {
                  t.success &&
                    (e.getTableData(),
                    e.$message({ message: "操作成功!", type: "success" }));
                })
                .catch(function (e) {});
            },
            sizeChange: function (e) {
              (this.formParams.pageSize = e), this.getTableData();
            },
            currentChange: function (e) {
              (this.preClaim.rowId = ""),
                (this.temp[this.formParams.pageNum] = this.tableData),
                void 0 != this.temp[e] && this.temp[e].length > 0
                  ? ((this.formParams.pageNum = e),
                    (this.tableData = this.temp[e]))
                  : ((this.formParams.pageNum = e), this.getTableData());
            },
            handleCurrentChange: function (e) {
              this.preClaim.rowId = e.rowId;
            },
            onCheckCallBack2: function () {
              (this.upDateMessage.orgId = this.selectObj2.orgId),
                (this.upDateMessage.orgName = this.selectObj2.orgName),
                (this.upDateMessage.orgLevel = this.selectObj2.orgLevel);
            },
            dbClickCallBack2: function () {
              (this.upDateMessage.orgId = this.selectObj2.orgId),
                (this.upDateMessage.orgName = this.selectObj2.orgName),
                (this.upDateMessage.orgLevel = this.selectObj2.orgLevel);
            },
            onCheckCallBack: function () {
              this.formParams.bssOrgId = this.orgObj.orgId;
            },
            dbClickCallBack: function () {
              this.formParams.bssOrgId = this.orgObj.orgId;
            },
            dbclickCallBack1: function () {
              this.formParams.servTypeSort = this.servTypeObj.servTypeSort;
            },
            areaSelectCallBack: function () {
              this.formParams.areaId = this.areaObj.areaId;
            },
          },
        },
        d = c,
        p = a("2877"),
        m = Object(p["a"])(d, i, l, !1, null, null, null);
      t["default"] = m.exports;
    },
    d1a6: function (e, t, a) {
      "use strict";
      (function (e) {
        a("8e6e"), a("456d"), a("6b54"), a("ac6a"), a("7f7f");
        var i = a("bd86"),
          l = (a("ae3c"), a("7fba"), a("3d51"), a("926d")),
          r = a("2f62");
        function s(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(a, !0).forEach(function (t) {
                  Object(i["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : s(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        t["a"] = {
          props: {
            treeEl: { type: String, default: "selfAreaTree" },
            mode: { type: String, default: "1" },
            placeholder: { type: String, default: "--请选择地域--" },
            size: { type: String, default: "small" },
            className: { type: String, default: "chart" },
            selectObj: { type: Object },
            initState: { type: Boolean, default: !1 },
            checkbox: { type: Boolean, default: !1 },
          },
          watch: {
            initState: {
              handler: function (t) {
                if (t) {
                  var a = e.fn.zTree.getZTreeObj(this.treeEl);
                  a.expandAll(!1), this.initStyle();
                }
              },
            },
          },
          data: function () {
            return {
              checkIdArray: [],
              checkNameArray: [],
              loading: !1,
              visible: !1,
              intervalTimer: null,
              curExpandNode: null,
              setting: {
                check: { enable: this.checkbox, chkboxType: { Y: "", N: "" } },
                view: { dblClickExpand: !1 },
                callback: {
                  beforeExpand: this.beforeExpand,
                  onExpand: this.onExpand,
                  onClick: this.onClick,
                  onDblClick: this.onDblClick,
                  onCheck: this.onCheck,
                },
                data: { simpleData: { enable: !0 } },
              },
              zNodes: [],
              searchKey: "",
            };
          },
          created: function () {},
          computed: o(
            {},
            Object(r["d"])({
              token: function (e) {
                return e.user.token;
              },
            }),
          ),
          mounted: function () {
            this.initStyle(),
              this.initData(),
              "2" == this.mode &&
                window.addEventListener("resize", this.initStyle);
          },
          methods: {
            filter: function (e, t, a) {
              return a.data;
            },
            initData: function () {
              var t = this,
                a = this.$storage.getLocalStorage("selfAreaTree");
              "null" == a || null == a
                ? ((this.loading = !0),
                  this.getData()
                    .then(function (a) {
                      (t.zNodes = a),
                        e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                        Object(l["a"])(t.treeEl, "#selfAreaInput", null, !1),
                        (t.loading = !1);
                    })
                    .catch(function (e) {
                      t.loading = !1;
                    }))
                : ((this.zNodes = JSON.parse(
                    this.$storage.getLocalStorage("selfAreaTree"),
                  )),
                  e.fn.zTree.init(
                    e("#" + this.treeEl),
                    this.setting,
                    this.zNodes,
                  ),
                  Object(l["a"])(this.treeEl, "#selfAreaInput", null, !1),
                  (this.loading = !1));
            },
            initStyle: function () {
              if ("1" == this.mode) {
                this.$refs.selfAreaInput.$el.clientWidth;
                e(".el-popper.org-popper").css("width", "auto"),
                  e(".el-popper.org-popper").css("maxHeight", "400px"),
                  e(".el-popper.org-popper").css("overflow", "auto");
              } else
                "2" == this.mode &&
                  e(".org-tree-dev").css(
                    "height",
                    window.innerHeight -
                      this.$refs.selfAreaInput.$el.offsetTop -
                      175,
                  );
            },
            reloadData: function () {
              var t = this;
              this.getData()
                .then(function (a) {
                  (t.zNodes = a),
                    e.fn.zTree.init(e("#" + t.treeEl), t.setting, t.zNodes),
                    Object(l["a"])(t.treeEl, "#selfAreaInput", null, !1),
                    t.$emit("reloadCallBack");
                })
                .catch(function (e) {});
            },
            getData: function () {
              var e = this,
                t = new Promise(function (t, a) {
                  e.$http
                    .post("org/getSelfAreaTree", {})
                    .then(function (a) {
                      var i = [];
                      a.success &&
                        ((i = a.data),
                        e.$storage.setLocalStorage(
                          "selfAreaTree",
                          JSON.stringify(i),
                        )),
                        t(
                          JSON.parse(
                            e.$storage.getLocalStorage("selfAreaTree"),
                          ),
                        );
                    })
                    .catch(function (e) {
                      a(e);
                    });
                });
              return t;
            },
            singlePath: function (t) {
              if (t !== this.curExpandNode) {
                var a,
                  i,
                  l,
                  r,
                  s,
                  o,
                  n = e.fn.zTree.getZTreeObj(this.treeEl);
                if (this.curExpandNode) {
                  if (this.curExpandNode && this.curExpandNode.open)
                    if (t.parentTId === this.curExpandNode.parentTId)
                      n.expandNode(this.curExpandNode, !1);
                    else {
                      var c = [];
                      while (t) {
                        if (
                          ((t = t.getParentNode()), t === this.curExpandNode)
                        ) {
                          c = null;
                          break;
                        }
                        t && c.push(t);
                      }
                      if (null != c) {
                        var d = this.curExpandNode,
                          p = [];
                        while (d) (d = d.getParentNode()), d && p.push(d);
                        c.length > 0
                          ? n.expandNode(
                              p[Math.abs(p.length - c.length) - 1],
                              !1,
                            )
                          : n.expandNode(p[p.length - 1], !1);
                      }
                    }
                } else {
                  i = t;
                  while (i) (l = i.tId), (i = i.getParentNode());
                  for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                    (o = a[r]), o.tId != l && n.expandNode(o, !1);
                }
                this.curExpandNode = t;
              }
            },
            onExpand: function (e, t, a) {
              this.curExpandNode = a;
            },
            beforeExpand: function (t, a) {
              for (
                var i = this.curExpandNode
                    ? this.curExpandNode.getParentNode()
                    : null,
                  l = a.parentTId ? a.getParentNode() : null,
                  r = e.fn.zTree.getZTreeObj(this.treeEl),
                  s = 0,
                  o = l ? l.children.length : 0;
                s < o;
                s++
              )
                a !== l.children[s] && r.expandNode(l.children[s], !1);
              while (i) {
                if (i === a) break;
                i = i.getParentNode();
              }
              i || this.singlePath(a);
            },
            onClick: function (t, a, i) {
              var l = this;
              clearTimeout(this.intervalTimer),
                (this.intervalTimer = setTimeout(function () {
                  if ("1" == l.mode) {
                    l.beforeExpand(a, i);
                    var t = e.fn.zTree.getZTreeObj(l.treeEl);
                    t.expandNode(i);
                  } else
                    (l.selectObj.areaName = i.name),
                      void 0 != l.selectObj.areaId &&
                        (l.selectObj.areaId = i.id),
                      void 0 != l.selectObj.areaLevel &&
                        (l.selectObj.areaLevel = i.lv);
                  l.$emit("clickCallBack");
                }, 500));
            },
            onDblClick: function (t, a, i) {
              if (
                (clearTimeout(this.intervalTimer),
                null != i &&
                  ((this.selectObj.areaName = i.name),
                  void 0 != this.selectObj.areaId &&
                    (this.selectObj.areaId = i.id),
                  void 0 != this.selectObj.areaLevel &&
                    (this.selectObj.areaLevel = i.lv)),
                "1" == this.mode)
              )
                this.visible = !1;
              else {
                this.beforeExpand(a, i);
                var l = e.fn.zTree.getZTreeObj(this.treeEl);
                l.expandNode(i);
              }
              this.$emit("dbClickCallBack");
            },
            onCheck: function (e, t, a) {
              var i = this;
              a.checked
                ? (this.checkIdArray.push(a.id),
                  this.checkNameArray.push(a.name))
                : this.checkIdArray.forEach(function (e, t, l) {
                    e === a.id &&
                      (i.checkIdArray.splice(t, 1),
                      i.checkNameArray.splice(t, 1));
                  }),
                void 0 != this.selectObj.areaId &&
                  (this.selectObj.areaId = this.checkIdArray.toString()),
                void 0 != this.selectObj.areaName &&
                  (this.selectObj.areaName = this.checkNameArray.toString()),
                this.$emit("onCheckCallBack");
            },
          },
        };
      }).call(this, a("1157"));
    },
    d457: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "role-layout" },
            [
              a(
                "keep-alive",
                [
                  e.$route.meta.keepAlive ? a("router-view") : e._e(),
                  e._v(">\n    "),
                ],
                1,
              ),
              e.$route.meta.keepAlive ? e._e() : a("router-view"),
            ],
            1,
          );
        },
        l = [],
        r = {
          data: function () {
            return {};
          },
        },
        s = r,
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["default"] = n.exports;
    },
    df07: function (t, a, i) {
      "use strict";
      (function (t) {
        i("8e6e"), i("456d"), i("6b54"), i("ac6a"), i("7f7f");
        var l = i("bd86"),
          r = (i("ae3c"), i("7fba"), i("3d51"), i("926d")),
          s = i("2f62"),
          o = i("13f4");
        function n(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, i);
          }
          return a;
        }
        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? n(a, !0).forEach(function (t) {
                  Object(l["a"])(e, t, a[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a),
                  )
                : n(a).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t),
                    );
                  });
          }
          return e;
        }
        a["a"] = Object(l["a"])(
          {
            props: {
              treeEl: { type: String, default: "bssOrgTreeDemo" },
              mode: { type: String, default: "1" },
              placeholder: { type: String, default: "--请选择组织机构--" },
              size: { type: String, default: "small" },
              className: { type: String, default: "chart" },
              showPath: { type: Boolean, default: !1 },
              selectObj: { type: Object },
              initState: { type: Boolean, default: !1 },
              checkbox: { type: Boolean, default: !1 },
              queryUrl: { type: String, default: "org/getLoginBssOrg" },
            },
            watch: {
              initState: {
                handler: function (e) {
                  if (e) {
                    var a = t.fn.zTree.getZTreeObj(this.treeEl);
                    a.expandAll(!1), this.initStyle();
                  }
                },
              },
            },
            data: function () {
              return {
                checkIdArray: [],
                checkNameArray: [],
                loading: !1,
                visible: !1,
                intervalTimer: null,
                curExpandNode: null,
                setting: {
                  check: {
                    enable: this.checkbox,
                    chkboxType: { Y: "", N: "" },
                  },
                  async: {
                    enable: !0,
                    contentType: "application/json;charset=utf-8",
                    url: o["a"].BASE_URL + this.queryUrl,
                    headers: {},
                    autoParam: ["id=parentOrgId"],
                    dataFilter: this.filter,
                  },
                  view: { dblClickExpand: !1 },
                  callback: {
                    beforeExpand: this.beforeExpand,
                    onExpand: this.onExpand,
                    onClick: this.onClick,
                    onDblClick: this.onDblClick,
                    onCheck: this.onCheck,
                  },
                  data: { simpleData: { enable: !0 } },
                },
                zNodes: [],
                searchKey: "",
              };
            },
            created: function () {
              this.setting.async.headers = {
                Authorization: "Bearer " + this.token,
              };
            },
            computed: c(
              {},
              Object(s["d"])({
                token: function (e) {
                  return e.user.token;
                },
              }),
            ),
            mounted: function () {
              this.initStyle(),
                this.initData(),
                "2" == this.mode &&
                  window.addEventListener("resize", this.initStyle);
            },
            beforeDestroy: function () {
              "2" == this.mode &&
                window.removeEventListener("resize", this.initStyle);
            },
            methods: {
              filter: function (e, t, a) {
                return a.data;
              },
              initData: function () {
                var e = this;
                this.loading = !0;
                var a = this.$storage.getLocalStorage("bssOrgTree");
                "null" == a || null == a
                  ? this.getData()
                      .then(function (a) {
                        (e.zNodes = a),
                          t.fn.zTree.init(
                            t("#" + e.treeEl),
                            e.setting,
                            e.zNodes,
                          ),
                          Object(r["a"])(e.treeEl, "#bssOrgInput", null, !1),
                          (e.loading = !1);
                      })
                      .catch(function (t) {
                        e.loading = !1;
                      })
                  : ((this.zNodes = JSON.parse(
                      this.$storage.getLocalStorage("bssOrgTree"),
                    )),
                    t.fn.zTree.init(
                      t("#" + this.treeEl),
                      this.setting,
                      this.zNodes,
                    ),
                    Object(r["a"])(this.treeEl, "#bssOrgInput", null, !1),
                    (this.loading = !1));
              },
              initStyle: function () {
                if ("1" == this.mode) {
                  var e = this.$refs.bssOrgInput.$el.clientWidth;
                  t(".el-popper.org-popper").css("width", 1.4 * e),
                    t(".el-popper.org-popper").css("maxHeight", "400px"),
                    t(".el-popper.org-popper").css("overflow", "auto");
                } else
                  "2" == this.mode &&
                    (t(".org-tree-dev").css(
                      "height",
                      window.innerHeight -
                        this.$refs.bssOrgInput.$el.offsetTop -
                        175,
                    ),
                    t("#oper_panel").children().length > 0 &&
                      t("#oper_panel").css({
                        height: "40%",
                        position: "absolute",
                        bottom: "1px",
                        width: "99%",
                        "z-index": "999",
                        background: "white",
                        "border-top": "#ebeff5 solid 1px",
                      }));
              },
              reloadData: function () {
                var e = this;
                this.getData()
                  .then(function (a) {
                    (e.zNodes = a),
                      t.fn.zTree.init(t("#" + e.treeEl), e.setting, e.zNodes),
                      Object(r["a"])(e.treeEl, "#bssOrgInput", null, !1),
                      e.$emit("reloadCallBack");
                  })
                  .catch(function (e) {});
              },
              getData: function () {
                var t = this,
                  a = new Promise(function (a, i) {
                    t.$http
                      .post(t.queryUrl, {})
                      .then(function (l) {
                        if (l.success) {
                          var r = l.data;
                          t.$storage.setLocalStorage(
                            "bssOrgTree",
                            JSON.stringify(r),
                          ),
                            a(
                              JSON.parse(
                                t.$storage.getLocalStorage("bssOrgTree"),
                              ),
                            );
                        } else i(e);
                      })
                      .catch(function (e) {
                        i(e);
                      });
                  });
                return a;
              },
              singlePath: function (e) {
                if (e !== this.curExpandNode) {
                  var a,
                    i,
                    l,
                    r,
                    s,
                    o,
                    n = t.fn.zTree.getZTreeObj(this.treeEl);
                  if (this.curExpandNode) {
                    if (this.curExpandNode && this.curExpandNode.open)
                      if (e.parentTId === this.curExpandNode.parentTId)
                        n.expandNode(this.curExpandNode, !1);
                      else {
                        var c = [];
                        while (e) {
                          if (
                            ((e = e.getParentNode()), e === this.curExpandNode)
                          ) {
                            c = null;
                            break;
                          }
                          e && c.push(e);
                        }
                        if (null != c) {
                          var d = this.curExpandNode,
                            p = [];
                          while (d) (d = d.getParentNode()), d && p.push(d);
                          c.length > 0
                            ? n.expandNode(
                                p[Math.abs(p.length - c.length) - 1],
                                !1,
                              )
                            : n.expandNode(p[p.length - 1], !1);
                        }
                      }
                  } else {
                    i = e;
                    while (i) (l = i.tId), (i = i.getParentNode());
                    for (a = n.getNodes(), r = 0, s = a.length; r < s; r++)
                      (o = a[r]), o.tId != l && n.expandNode(o, !1);
                  }
                  this.curExpandNode = e;
                }
              },
              onExpand: function (e, t, a) {
                this.curExpandNode = a;
              },
              beforeExpand: function (e, a) {
                for (
                  var i = this.curExpandNode
                      ? this.curExpandNode.getParentNode()
                      : null,
                    l = a.parentTId ? a.getParentNode() : null,
                    r = t.fn.zTree.getZTreeObj(this.treeEl),
                    s = 0,
                    o = l ? l.children.length : 0;
                  s < o;
                  s++
                )
                  a !== l.children[s] && r.expandNode(l.children[s], !1);
                while (i) {
                  if (i === a) break;
                  i = i.getParentNode();
                }
                i || this.singlePath(a);
              },
              onClick: function (e, a, i) {
                var l = this;
                clearTimeout(this.intervalTimer),
                  (this.intervalTimer = setTimeout(function () {
                    if ("1" == l.mode) {
                      l.beforeExpand(a, i);
                      var e = t.fn.zTree.getZTreeObj(l.treeEl);
                      e.expandNode(i);
                    } else
                      (l.selectObj.orgName = i.name),
                        void 0 != l.selectObj.orgId &&
                          (l.selectObj.orgId = i.id),
                        void 0 != l.selectObj.orgLevel &&
                          (l.selectObj.orgLevel = i.lv),
                        void 0 != l.selectObj.regionId &&
                          (l.selectObj.regionId = i.regionId),
                        void 0 != l.selectObj.areaId &&
                          (l.selectObj.areaId = i.areaId);
                    l.$emit("clickCallBack");
                  }, 500));
              },
              onDblClick: function (e, a, i) {
                if (
                  (clearTimeout(this.intervalTimer),
                  null != i &&
                    ((this.selectObj.orgName = i.name),
                    (this.selectObj.orgId = i.id),
                    (this.selectObj.regionId = i.regionId),
                    void 0 != this.selectObj.orgId &&
                      (this.selectObj.orgId = i.id),
                    void 0 != this.selectObj.orgLevel &&
                      (this.selectObj.orgLevel = i.lv),
                    void 0 != this.selectObj.regionId &&
                      (this.selectObj.regionId = i.regionId),
                    void 0 != this.selectObj.areaId &&
                      (this.selectObj.areaId = i.areaId)),
                  "1" == this.mode)
                )
                  this.visible = !1;
                else {
                  this.beforeExpand(a, i);
                  var l = t.fn.zTree.getZTreeObj(this.treeEl);
                  l.expandNode(i);
                }
                this.$emit("dbClickCallBack");
              },
              onCheck: function (e, t, a) {
                var i = this;
                a.checked
                  ? (this.checkIdArray.push(a.id),
                    this.checkNameArray.push(a.name))
                  : this.checkIdArray.forEach(function (e, t, l) {
                      e === a.id &&
                        (i.checkIdArray.splice(t, 1),
                        i.checkNameArray.splice(t, 1));
                    }),
                  void 0 != this.selectObj.orgId &&
                    (this.selectObj.orgId = this.checkIdArray.toString()),
                  void 0 != this.selectObj.orgName &&
                    (this.selectObj.orgName = this.checkNameArray.toString()),
                  this.$emit("onCheckCallBack");
              },
            },
          },
          "beforeDestroy",
          function () {
            window.removeEventListener("resize", this.initStyle);
          },
        );
      }).call(this, i("1157"));
    },
    e047: function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "gridCharInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          clearable: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.gridCharName,
                          callback: function (t) {
                            e.$set(e.selectObj, "gridCharName", t);
                          },
                          expression: "selectObj.gridCharName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "gridCharInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "gridCharInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("7268"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
    e244: function (e, t, a) {
      e.exports = a.p + "assets/img/excel.d0375541.jpeg";
    },
    fa48: function (e, t, a) {
      e.exports = a.p + "assets/img/word.b04d477d.jpeg";
    },
    fdef: function (e, t) {
      e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    },
    fe48: function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "org-tree-container" },
            [
              "1" == e.mode
                ? a(
                    "el-popover",
                    {
                      attrs: {
                        placement: "bottom-start",
                        trigger: "click",
                        "popper-class": "layout-popover-comp org-popper",
                      },
                      model: {
                        value: e.visible,
                        callback: function (t) {
                          e.visible = t;
                        },
                        expression: "visible",
                      },
                    },
                    [
                      a("ul", {
                        staticClass: "ztree org-tree",
                        attrs: { id: e.treeEl },
                      }),
                      a("el-input", {
                        ref: "selfOrgInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          readonly: "",
                        },
                        slot: "reference",
                        model: {
                          value: e.selectObj.orgName,
                          callback: function (t) {
                            e.$set(e.selectObj, "orgName", t);
                          },
                          expression: "selectObj.orgName",
                        },
                      }),
                    ],
                    1,
                  )
                : e._e(),
              "2" == e.mode
                ? a(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: e.loading,
                          expression: "loading",
                        },
                      ],
                      staticClass: "org-tree-panel",
                    },
                    [
                      a("el-input", {
                        ref: "selfOrgInput",
                        attrs: {
                          slot: "reference",
                          placeholder: e.placeholder,
                          size: e.size,
                          className: e.className,
                          id: "selfOrgInput",
                          "suffix-icon": "el-icon-search",
                        },
                        slot: "reference",
                        model: {
                          value: e.searchKey,
                          callback: function (t) {
                            e.searchKey = t;
                          },
                          expression: "searchKey",
                        },
                      }),
                      a(
                        "div",
                        {
                          staticClass: "org-tree-dev",
                          staticStyle: { overflow: "auto" },
                        },
                        [
                          a("ul", {
                            staticClass: "ztree",
                            attrs: { id: e.treeEl },
                          }),
                        ],
                      ),
                    ],
                    1,
                  )
                : e._e(),
            ],
            1,
          );
        },
        l = [],
        r = a("69ee"),
        s = r["a"],
        o = a("2877"),
        n = Object(o["a"])(s, i, l, !1, null, null, null);
      t["a"] = n.exports;
    },
  },
]);
