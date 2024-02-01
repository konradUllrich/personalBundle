import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XCALPERSONALAttributes {
    LID: number;
    LUSERID?: number;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    DTFROM?: Date;
    DTTO?: Date;
    STRHEADLINE?: string;
    LRECURRENCETYPE?: number;
    LRECURRENCEMASTER?: number;
    TXTBODY?: string;
    REF_FFE0EA60?: number;
    STR_TYPE?: string;
    REF_RULE_ID?: string;
}

@Table({
	tableName: "XCALPERSONAL",
	timestamps: false 
})
export class XCALPERSONAL extends Model<XCALPERSONALAttributes, XCALPERSONALAttributes> implements XCALPERSONALAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTFROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTTO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRHEADLINE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LRECURRENCETYPE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LRECURRENCEMASTER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTBODY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_FFE0EA60?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_RULE_ID?: string;

}