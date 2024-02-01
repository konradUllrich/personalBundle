import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TSK_TASKAttributes {
    STR_STATE?: string;
    DTEDIT?: Date;
    REF_C0C47245?: number;
    LUSERID?: number;
    TXT_BEMERKUNGEN?: string;
    STR_TITLE?: string;
    STR_SHARE_GROUP?: string;
    B_EMAIL_SENT?: boolean;
    L_DURATION_MIN?: number;
    B_CHANGE_SHARE?: boolean;
    L_CLOSED?: number;
    DT_TOBEDONETO?: Date;
    B_SHAREGROUP?: boolean;
    L_DATEI?: number;
    STRID: string;
    DT_FROM?: Date;
    REF_5AF284D8?: string;
    B_SHARE?: boolean;
    REF_91F93E92?: string;
    B_CHANGE_RESPONSIBLE?: boolean;
    REF_2648DFA5?: number;
    LUSERIDINSERT?: number;
    B_EMAIL_STATUS?: boolean;
    TXT_CLOSED?: string;
    L_CHART?: number;
    DTINSERT?: Date;
    DT_DATE?: Date;
    L_DURATION_H?: number;
    STR_PROJECT?: string;
    STR_IMPORTANCE?: string;
    B_IMPORTANT?: boolean;
    DT_CLOSED?: Date;
    B_EMAIL_REMINDER?: boolean;
}

@Table({
	tableName: "TSK_TASK",
	timestamps: false 
})
export class TSK_TASK extends Model<TSK_TASKAttributes, TSK_TASKAttributes> implements TSK_TASKAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_C0C47245?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNGEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SHARE_GROUP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EMAIL_SENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DURATION_MIN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CHANGE_SHARE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CLOSED?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TOBEDONETO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHAREGROUP?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DATEI?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_FROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_5AF284D8?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_91F93E92?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CHANGE_RESPONSIBLE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_2648DFA5?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EMAIL_STATUS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_CLOSED?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CHART?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DURATION_H?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PROJECT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_IMPORTANCE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_CLOSED?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EMAIL_REMINDER?: boolean;

}