import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_QUESTIONSAttributes {
    STRID: string;
    TXT_QUESTIONDETAILS?: string;
    STR_QUESTION?: string;
    L_FILEINFORMATION?: string;
    LUSERIDINSERT?: number;
    B_URGENT?: boolean;
    B_IMPORTANT?: boolean;
    TXT_MEDIADATA?: string;
    TXT_ANSWER?: string;
    DTINSERT?: Date;
    DT_DATE?: Date;
    TXT_ANSWERMEDIA?: string;
    TXT_DISTRIBUTOR?: string;
    B_DISTRIBUTOR?: boolean;
    B_SHARE?: boolean;
    DTEDIT?: Date;
    B_SHAREGROUP?: boolean;
    STR_SHAREGROUP?: string;
    TXT_DUMMYTAGS?: string;
    L_RELEASE?: number;
    L_ANTWORTDATEI?: number;
    LUSERID?: number;
    REF_USER_ID?: number;
}

@Table({
	tableName: "QU_QUESTIONS",
	timestamps: false 
})
export class QU_QUESTIONS extends Model<QU_QUESTIONSAttributes, QU_QUESTIONSAttributes> implements QU_QUESTIONSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_QUESTIONDETAILS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_QUESTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	L_FILEINFORMATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MEDIADATA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ANSWER?: string;

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
    	type: DataType.STRING(-1) 
    })
    	TXT_ANSWERMEDIA?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DISTRIBUTOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DISTRIBUTOR?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHAREGROUP?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SHAREGROUP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DUMMYTAGS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_RELEASE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANTWORTDATEI?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_USER_ID?: number;

}