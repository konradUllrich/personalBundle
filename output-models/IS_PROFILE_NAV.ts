import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PROFILE_NAVAttributes {
    STR_NAME?: string;
    L_ORDER?: number;
    LUSERID?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    B_HIDE?: boolean;
    FKSTRID?: string;
    B_MANDATORY?: boolean;
    REF_NAV?: string;
    LUSERIDINSERT?: number;
    STR_LANG?: string;
    STRID: string;
}

@Table({
	tableName: "IS_PROFILE_NAV",
	timestamps: false 
})
export class IS_PROFILE_NAV extends Model<IS_PROFILE_NAVAttributes, IS_PROFILE_NAVAttributes> implements IS_PROFILE_NAVAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MANDATORY?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_NAV?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LANG?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}