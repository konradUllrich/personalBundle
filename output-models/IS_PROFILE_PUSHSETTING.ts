import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PROFILE_PUSHSETTINGAttributes {
    STR_KEY?: string;
    STRID: string;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    STR_VALUE?: string;
    FKSTRID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_PROFILE_PUSHSETTING",
	timestamps: false 
})
export class IS_PROFILE_PUSHSETTING extends Model<IS_PROFILE_PUSHSETTINGAttributes, IS_PROFILE_PUSHSETTINGAttributes> implements IS_PROFILE_PUSHSETTINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KEY?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VALUE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

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