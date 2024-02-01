import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_SYSTEMMESSAGE_RCPTAttributes {
    B_READ?: boolean;
    DT_READ?: Date;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_RECIPIENT_GUID?: string;
    LID: number;
    FKLID?: number;
    B_DEACTIVATED?: boolean;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_SYSTEMMESSAGE_RCPT",
	timestamps: false 
})
export class IS_SYSTEMMESSAGE_RCPT extends Model<IS_SYSTEMMESSAGE_RCPTAttributes, IS_SYSTEMMESSAGE_RCPTAttributes> implements IS_SYSTEMMESSAGE_RCPTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_READ?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_READ?: Date;

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
    	type: DataType.STRING(255) 
    })
    	STR_RECIPIENT_GUID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DEACTIVATED?: boolean;

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

}