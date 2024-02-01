import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_MAILSETTINGAttributes {
    DTINSERT?: Date;
    B_USERDEFINABLE?: boolean;
    DTEDIT?: Date;
    STR_KEY?: string;
    LUSERIDINSERT?: number;
    STRID: string;
    LUSERID?: number;
    STR_VALUE?: string;
}

@Table({
	tableName: "IS_MAILSETTING",
	timestamps: false 
})
export class IS_MAILSETTING extends Model<IS_MAILSETTINGAttributes, IS_MAILSETTINGAttributes> implements IS_MAILSETTINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_USERDEFINABLE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KEY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VALUE?: string;

}