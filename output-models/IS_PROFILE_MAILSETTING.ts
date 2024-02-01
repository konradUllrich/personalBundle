import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PROFILE_MAILSETTINGAttributes {
    FKSTRID?: string;
    DTINSERT?: Date;
    STRID: string;
    DTEDIT?: Date;
    STR_VALUE?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    STR_KEY?: string;
}

@Table({
	tableName: "IS_PROFILE_MAILSETTING",
	timestamps: false 
})
export class IS_PROFILE_MAILSETTING extends Model<IS_PROFILE_MAILSETTINGAttributes, IS_PROFILE_MAILSETTINGAttributes> implements IS_PROFILE_MAILSETTINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VALUE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KEY?: string;

}