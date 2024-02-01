import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PUSHNOTIFICATIONSETTINGAttributes {
    STRID: string;
    STR_VALUE?: string;
    B_USERDEFINABLE?: boolean;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
    STR_KEY?: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "IS_PUSHNOTIFICATIONSETTING",
	timestamps: false 
})
export class IS_PUSHNOTIFICATIONSETTING extends Model<IS_PUSHNOTIFICATIONSETTINGAttributes, IS_PUSHNOTIFICATIONSETTINGAttributes> implements IS_PUSHNOTIFICATIONSETTINGAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VALUE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_USERDEFINABLE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KEY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}